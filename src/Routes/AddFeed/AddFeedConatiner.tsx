import axios from "axios";
import React, { ChangeEventHandler } from "react";
import { Mutation } from "react-apollo";
import { RouteComponentProps } from "react-router-dom";
import { toast } from "react-toastify";
import { addFeed, addFeedVariables } from "../../types/api";
import AddFeedPresenter from "./AddFeedPresenter";
import { ADD_FEED } from "./AddFeedQueries.queries";

class AddFeedMutation extends Mutation<addFeed, addFeedVariables> {}

interface IState {
  placeAddress: string;
  placeName: string;
  placeId: number;
  feedText: string;
  feedPicture: string;
}

class AddFeedContainer extends React.Component<
  RouteComponentProps<any>,
  IState
> {
  constructor(props) {
    super(props);
    const {
      location: {
        state: { placeId, placeName, placeAddress }
      }
    } = this.props;
    this.state = {
      feedPicture: "",
      feedText: "",
      placeAddress,
      placeId,
      placeName
    };
  }
  public render() {
    const {
      placeId,
      placeAddress,
      placeName,
      feedText,
      feedPicture
    } = this.state;
    return (
      <AddFeedMutation
        mutation={ADD_FEED}
        variables={{ feedPicture, placeId, text: feedText }}
        onCompleted={data => {
          const { AddFeed } = data;
          if (AddFeed.ok) {
            toast("피드가 추가되었습니다!");
            setTimeout(() => {
              this.props.history.push(`/feeds/${placeId}`);
            }, 3000);
          } else {
            toast(AddFeed.error);
          }
        }}
      >
        {addFeedFn => (
          <AddFeedPresenter
            placeId={placeId}
            placeName={placeName}
            placeAddress={placeAddress}
            feedText={feedText}
            onInputChange={this.onInputChange}
            onSubmit={addFeedFn}
          />
        )}
      </AddFeedMutation>
    );
  }

  public onInputChange: ChangeEventHandler<any> = async event => {
    const {
      target: { name, value, files }
    } = event;

    if (files) {
      const formData = new FormData();
      formData.append("file", files[0]);
      formData.append("api_key", "561697398576422");
      formData.append("upload_preset", "qxnxc23l");
      formData.append("timestamp", String(Date.now() / 1000));
      const {
        data: { secure_url }
      } = await axios.post(
        "https://api.cloudinary.com/v1_1/dy2fdcshe/image/upload",
        formData
      );
      if (secure_url) {
        this.setState({
          feedPicture: secure_url
        });
      }
    }

    this.setState({
      [name]: value
    } as any);
  };
}

export default AddFeedContainer;
