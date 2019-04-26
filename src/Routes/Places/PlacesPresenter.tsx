import React from "react";
import Helmet from "react-helmet";
import BackArrow from "../../Components/BackArrow/index";
import styled from "../../typed-components";

const ExtendedBackArrow = styled(BackArrow)`
  position: absolute;
  left: 10px;
  top: 10px;
  z-index: 2;
`;

const Map = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
`;

interface IProps {
  mapRef: any;
}

class PlacesPresenter extends React.Component<IProps> {
  public render() {
    const { mapRef } = this.props;
    return (
      <div>
        <Helmet>
          <title>플레이스 - We There</title>
        </Helmet>
        <ExtendedBackArrow backTo={"/"} fillColor={"black"} />
        <Map ref={mapRef} />
      </div>
    );
  }
}

export default PlacesPresenter;
