import axios from "axios";
import React from "react";
import { Mutation, Query } from "react-apollo";
import { RouteComponentProps } from "react-router-dom";
import { toast } from "react-toastify";
import { USER_PROFILE } from "../../sharedQueries.queries";
import {
  getMyProfile,
  updateMyProfile,
  updateMyProfileVariables
} from "../../types/api";
import ProfilePresenter from "./ProfilePresenter";
import { UPDATE_PROFILE } from "./ProfileQueries.queries";

class ProfileQuery extends Query<getMyProfile> {}
class UpdateProfileMutation extends Mutation<
  updateMyProfile,
  updateMyProfileVariables
> {}

interface IState {
  photo: string;
  nickname: string;
  gender: string;
  status: string;
  uploading: boolean;
}

class ProfileContainer extends React.Component<
  RouteComponentProps<any>,
  IState
> {
  public state = {
    gender: "",
    nickname: "",
    photo: "",
    status: "",
    uploading: false
  };
  public render() {
    const { photo, nickname, gender, status, uploading } = this.state;
    return (
      <ProfileQuery
        query={USER_PROFILE}
        fetchPolicy={"cache-and-network"}
        onCompleted={data => {
          if (data && data.GetMyProfile && data.GetMyProfile.user) {
            const {
              profilePhoto,
              nickname,
              gender,
              status
            } = data.GetMyProfile.user;
            if (profilePhoto && nickname && gender && status) {
              this.setState({
                gender,
                nickname,
                photo: profilePhoto,
                status
              });
            }
          }
        }}
      >
        {({ data, loading }) => {
          return (
            <UpdateProfileMutation
              mutation={UPDATE_PROFILE}
              variables={{
                gender,
                nickname,
                profilePhoto: photo,
                status
              }}
              onCompleted={data => {
                const { UpdateMyProfile } = data;
                if (UpdateMyProfile.ok) {
                  toast("프로필이 변경되었습니다!");
                  setTimeout(() => {
                    this.props.history.push("/wethere-client/");
                  }, 3000);
                } else {
                  toast(UpdateMyProfile.error);
                }
              }}
            >
              {updateMutation => (
                <ProfilePresenter
                  data={data}
                  loading={loading}
                  photo={photo}
                  nickname={nickname}
                  gender={gender}
                  status={status}
                  onInputChange={this.onInputChange}
                  onSubmit={updateMutation}
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
    const {
      target: { name, value, files }
    } = event;

    if (files) {
      this.setState({
        uploading: true
      });
      const formData = new FormData();
      formData.append("file", files[0]);
      formData.append("upload_preset", "qxnxc23l");
      formData.append("api_key", "561697398576422"),
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

export default ProfileContainer;
