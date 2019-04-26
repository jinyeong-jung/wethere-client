import { GoogleApiWrapper } from "google-maps-react";
import { MAPS_KEY } from "../../keys";
import PlacesContainer from "./PlacesContainer";

export default GoogleApiWrapper({ apiKey: MAPS_KEY })(PlacesContainer);
