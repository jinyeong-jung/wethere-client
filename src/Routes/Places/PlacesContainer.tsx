import React from "react";
import { Mutation } from "react-apollo";
import ReactDOM from "react-dom";
import { toast } from "react-toastify";
import { geocode } from "src/mapHelpers";
import { addPlace, addPlaceVariables } from "../../types/api";
import PlacesPresenter from "./PlacesPresenter";
import { ADD_PLACE } from "./PlacesQueries.queries";

class AddPlaceMutation extends Mutation<addPlace, addPlaceVariables> {}

interface IState {
  latitude: number;
  longitude: number;
  address: string;
  name: string;
  adding: boolean;
  ableToAdd: boolean;
  isVisited: boolean;
}

class PlacesContainer extends React.Component<any, IState> {
  public mapRef: any;
  public map: google.maps.Map;
  public newMarker: google.maps.Marker;
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
      name: ""
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
      latitude,
      longitude
    } = this.state;
    return (
      <AddPlaceMutation
        mutation={ADD_PLACE}
        variables={{
          address,
          isVisited,
          lat: latitude,
          lng: longitude,
          name
        }}
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
        {addPlaceFn => (
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
            addPlaceFn={addPlaceFn}
          />
        )}
      </AddPlaceMutation>
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
      minZoom: 8,
      zoom: 13
    };
    this.map = new maps.Map(mapDiv, mapOptions);
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
        icon:
          "http://www.hanryang-blog.com/media/contents_images/2019/04/29/pin_70fgfzX.png",
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
}

export default PlacesContainer;
