import { gql } from "apollo-boost";

export const PLACE_DETAIL = gql`
  query placeDetail($placeId: Int!) {
    PlaceDetail(placeId: $placeId) {
      ok
      error
      place {
        name
        address
        isVisited
      }
    }
  }
`;

export const DELETE_PLACE = gql`
  mutation deletePlace($placeId: Int!) {
    DeletePlace(placeId: $placeId) {
      ok
      error
    }
  }
`;
