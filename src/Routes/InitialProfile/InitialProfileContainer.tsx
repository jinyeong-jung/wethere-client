import axios from "axios";
import React from "react";
import { Mutation, Query } from "react-apollo";
import { RouteComponentProps } from "react-router-dom";
import { toast } from "react-toastify";
import { USER_PROFILE } from "../../sharedQueries.queries";
import {
  getMyProfile,
  initialProfile,
  initialProfileVariables
} from "../../types/api";
import InitialProfilePresenter from "./InitialProfilePresenter";
import { INITIAL_PROFILE } from "./InitialProfileQueries.queries";

class ProfileQuery extends Query<getMyProfile> {}

class UpdateProfileMutation extends Mutation<
  initialProfile,
  initialProfileVariables
> {}

interface IState {
  photo: string;
  nickname: string;
  gender: string;
  uploading: boolean;
}

class InitialProfileContainer extends React.Component<
  RouteComponentProps<any>,
  IState
> {
  public state = {
    gender: "",
    nickname: "",
    photo: "",
    uploading: false
  };
  public render() {
    const { photo, nickname, gender, uploading } = this.state;
    return (
      <ProfileQuery
        query={USER_PROFILE}
        onCompleted={data => {
          if (data && data.GetMyProfile && data.GetMyProfile.user) {
            const { profilePhoto, nickname, gender } = data.GetMyProfile.user;
            if (profilePhoto && nickname && gender) {
              this.setState({
                gender,
                nickname,
                photo: profilePhoto
              });
            }
          }
        }}
      >
        {({ data, loading }) => {
          return (
            <UpdateProfileMutation
              mutation={INITIAL_PROFILE}
              variables={{
                gender,
                nickname,
                profilePhoto: photo
              }}
              onCompleted={data => {
                const { UpdateMyProfile } = data;
                if (UpdateMyProfile.ok) {
                  toast("프로필이 변경되었습니다 😁");
                  setTimeout(() => {
                    this.props.history.push("/wethere-client/");
                  }, 3000);
                } else {
                  toast(UpdateMyProfile.error);
                }
              }}
            >
              {updateMutation => (
                <InitialProfilePresenter
                  loading={loading}
                  data={data}
                  onInputChange={this.onInputChange}
                  onSubmit={updateMutation}
                  photo={photo}
                  nickname={nickname}
                  gender={gender}
                  uploading={uploading}
                />
              )}
            </UpdateProfileMutation>
          );
        }}
      </ProfileQuery>
    );
  }
  public onInputChange: React.ChangeEventHandler<
    HTMLInputElement
  > = async event => {
    const { name, value, files } = event.target;

    if (files) {
      this.setState({
        uploading: true
      });
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
          photo: secure_url,
          uploading: false
        });
      }
    }

    this.setState({
      [name]: value
    } as any);
  };
}

export default InitialProfileContainer;
