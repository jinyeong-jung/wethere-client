import React from "react";
import { Mutation, MutationFn, Query } from "react-apollo";
import ReactDOM from "react-dom";
import { toast } from "react-toastify";
import { geocode } from "src/mapHelpers";
import { addPlace, addPlaceVariables, getPlaces } from "../../types/api";
import PlacesPresenter from "./PlacesPresenter";
import { ADD_PLACE, GET_PLACES } from "./PlacesQueries.queries";

const USER_ICON =
  "http://www.hanryang-blog.com/media/contents_images/2019/04/29/user.png";

const NEW_PLACE_ICON =
  "http://www.hanryang-blog.com/media/contents_images/2019/04/29/pin_70fgfzX.png";

const VISITED_PLACE =
  "http://www.hanryang-blog.com/media/contents_images/2019/04/29/visited.png";

const NOT_VISITED_PLACE =
  "http://www.hanryang-blog.com/media/contents_images/2019/04/29/unvisited.png";

class GetPlacesQuery extends Query<getPlaces> {}

class AddPlaceMutation extends Mutation<addPlace, addPlaceVariables> {}

interface IState {
  latitude: number;
  longitude: number;
  address: string;
  name: string;
  adding: boolean;
  ableToAdd: boolean;
  isVisited: boolean;
  seeVisits: boolean;
}

class PlacesContainer extends React.Component<any, IState> {
  public mapRef: any;
  public map: google.maps.Map;
  public userMarker: google.maps.Marker;
  public newMarker: google.maps.Marker;
  public addPlaceMutation: MutationFn;
  constructor(props) {
    super(props);
    this.mapRef = React.createRef();
    this.state = {
      ableToAdd: false,
      adding: false,
      address: "",
      isVisited: false,
      latitude: 0,
      longitude: 0,
      name: "",
      seeVisits: false
    };
  }

  public componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      this.handleGeoSuccess,
      this.handleGeoError,
      { maximumAge: Infinity, timeout: 5000, enableHighAccuracy: true }
    );
  }

  public render() {
    const {
      address,
      name,
      ableToAdd,
      adding,
      isVisited,
      seeVisits
    } = this.state;
    return (
      <GetPlacesQuery
        query={GET_PLACES}
        fetchPolicy={"cache-and-network"}
        pollInterval={500}
        onCompleted={data => {
          if (data && data.GetPlaces) {
            const {
              GetPlaces: { visitedPlaces, notVisitedPlaces }
            } = data;
            this.loadPlaces(visitedPlaces, notVisitedPlaces);
          }
        }}
      >
        {() => {
          return (
            <AddPlaceMutation
              mutation={ADD_PLACE}
              onCompleted={data => {
                const { AddPlace } = data;
                if (AddPlace.ok) {
                  toast("새로운 플레이스가 등록되었습니다 🎉");
                  setTimeout(() => {
                    this.reloadTheMap();
                  }, 3000);
                } else {
                  toast(AddPlace.error);
                }
              }}
            >
              {addPlaceFn => {
                this.addPlaceMutation = addPlaceFn;
                return (
                  <PlacesPresenter
                    mapRef={this.mapRef}
                    address={address}
                    name={name}
                    onChange={this.onInputChange}
                    onSubmit={this.onSubmit}
                    ableToAdd={ableToAdd}
                    handleClickAdd={this.handleClickAdd}
                    handleClickCancel={this.reloadTheMap}
                    adding={adding}
                    isVisited={isVisited}
                    onVisitBtnClick={this.onVisitBtnClick}
                    addPlaceFn={this.handleAddPlace}
                    seeVisits={seeVisits}
                    toggleVisitMode={this.toggleVisitMode}
                  />
                );
              }}
            </AddPlaceMutation>
          );
        }}
      </GetPlacesQuery>
    );
  }

  public handleGeoSuccess = position => {
    const {
      coords: { latitude, longitude }
    } = position;
    this.setState({ latitude, longitude });
    this.loadMap(latitude, longitude);
  };

  public handleGeoError = () => {
    console.log("위치를 찾을 수 없습니다.");
  };

  public loadMap = (latitude, longitude) => {
    const { google } = this.props;
    const maps = google.maps;
    const mapDiv = ReactDOM.findDOMNode(this.mapRef.current);
    const mapOptions: google.maps.MapOptions = {
      center: { lat: latitude, lng: longitude },
      disableDefaultUI: true,
      zoom: 11
    };
    this.map = new maps.Map(mapDiv, mapOptions);
    const markerOptions: google.maps.MarkerOptions = {
      animation: google.maps.Animation.BOUNCE,
      icon: USER_ICON,
      map: this.map,
      position: { lat: latitude, lng: longitude },
      zIndex: 3
    };
    this.userMarker = new google.maps.Marker(markerOptions);
  };

  public loadPlaces = (visitedPlaces, notVisitedPlaces) => {
    const { seeVisits } = this.state;

    if (seeVisits) {
      for (const place of visitedPlaces) {
        const markerOptions: google.maps.MarkerOptions = {
          icon: VISITED_PLACE,
          map: this.map,
          position: { lat: place.lat, lng: place.lng }
        };
        const placesMarker = new google.maps.Marker(markerOptions);

        const content =
          `<div>💛 ${place.name} 💛</div>` +
          `<div>: ${place.address}</div>` +
          `<br>` +
          `<a href="/wethere-client/feeds/${
            place.id
          }">📃 피드 목록 및 글쓰기 (CLICK)</a>` +
          `<br>` +
          `<a href="/wethere-client/places/delete/${
            place.id
          }">❌ 플레이스 삭제 (CLICK)</a>`;

        const infowindow = new google.maps.InfoWindow({
          content
        });

        placesMarker.addListener("click", () =>
          infowindow.open(this.map, placesMarker)
        );
      }
    } else {
      for (const place of notVisitedPlaces) {
        const markerOptions: google.maps.MarkerOptions = {
          icon: NOT_VISITED_PLACE,
          map: this.map,
          position: { lat: place.lat, lng: place.lng }
        };
        const placesMarker = new google.maps.Marker(markerOptions);

        const content =
          `<div>💛 ${place.name} 💛</div>` +
          `<div>: ${place.address}</div>` +
          `<br>` +
          `<a href="/wethere-client/feeds/${
            place.id
          }">📃 피드 목록 및 글쓰기 (CLICK)</a>` +
          `<br>` +
          `<a href="/wethere-client/places/delete/${
            place.id
          }">❌ 플레이스 삭제 (CLICK)</a>`;

        const infowindow = new google.maps.InfoWindow({
          content
        });

        placesMarker.addListener("click", () =>
          infowindow.open(this.map, placesMarker)
        );
      }
    }
  };

  public onInputChange: React.ChangeEventHandler<HTMLInputElement> = event => {
    const {
      target: { value, name }
    } = event;
    this.setState({
      [name]: value
    } as any);
  };

  public onSubmit = async () => {
    const { address } = this.state;
    const result = await geocode(address);
    if (result !== false) {
      const { formatted_address, lat, lng } = result;
      this.setState({
        address: formatted_address,
        latitude: lat,
        longitude: lng
      });
      this.map.panTo({ lat, lng });

      const markerOptions: google.maps.MarkerOptions = {
        animation: google.maps.Animation.DROP,
        icon: NEW_PLACE_ICON,
        map: this.map,
        position: { lat, lng }
      };
      this.newMarker = new google.maps.Marker(markerOptions);
      this.loadAddBtn();
    }
  };

  public loadAddBtn = () => {
    this.setState({
      ableToAdd: true
    });
  };

  public handleClickAdd = () => {
    this.setState({
      ableToAdd: false,
      adding: true
    });
  };

  public handleAddPlace = () => {
    const { address, isVisited, latitude, longitude, name } = this.state;
    this.addPlaceMutation({
      variables: {
        address,
        isVisited,
        lat: latitude,
        lng: longitude,
        name
      }
    });
    this.setState({
      adding: false,
      address: "",
      isVisited: false,
      name: "",
      seeVisits: false
    });
  };

  public reloadTheMap = () => {
    navigator.geolocation.watchPosition(
      position => {
        const {
          coords: { latitude, longitude }
        } = position;
        this.setState({
          ableToAdd: false,
          adding: false,
          address: "",
          latitude,
          longitude
        });
        this.loadMap(latitude, longitude);
      },
      error => {
        console.log(error);
      },
      { maximumAge: Infinity, timeout: 5000, enableHighAccuracy: true }
    );
  };

  public onVisitBtnClick = () => {
    const { isVisited } = this.state;
    this.setState({
      isVisited: !isVisited
    });
  };

  public toggleVisitMode = () => {
    const { seeVisits } = this.state;
    this.setState({
      seeVisits: !seeVisits
    });
    this.reloadTheMap();
  };
}

export default PlacesContainer;
