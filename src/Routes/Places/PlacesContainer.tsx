import React from "react";
import ReactDOM from "react-dom";
import PlacesPresenter from "./PlacesPresenter";

interface IState {
  latitude: number;
  longitude: number;
}

class PlacesContainer extends React.Component<any, IState> {
  public mapRef: any;
  public map: google.maps.Map;
  constructor(props) {
    super(props);
    this.mapRef = React.createRef();
  }
  public componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      this.handleGeoSuccess,
      this.handleGeoError,
      { maximumAge: Infinity, timeout: 5000, enableHighAccuracy: true }
    );
  }
  public render() {
    return <PlacesPresenter mapRef={this.mapRef} />;
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
      zoom: 13
    };
    this.map = new maps.Map(mapDiv, mapOptions);
  };
}

export default PlacesContainer;
