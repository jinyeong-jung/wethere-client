import React from "react";
import { Query } from "react-apollo";
import { RouteComponentProps } from "react-router-dom";
import { USER_PROFILE } from "../../sharedQueries.queries";
import { getMyProfile } from "../../types/api";
import ProfilePresenter from "./ProfilePresenter";

class ProfileQuery extends Query<getMyProfile> {}

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
            <ProfilePresenter
              data={data}
              loading={loading}
              photo={photo}
              nickname={nickname}
              gender={gender}
              status={status}
              onInputChange={this.onInputChange}
              onSubmit={null}
              uploading={uploading}
            />
          );
        }}
      </ProfileQuery>
    );
  }
  public onInputChange: React.ChangeEventHandler<HTMLInputElement> = event => {
    const {
      target: { name, value, files }
    } = event;
    console.log(name, value, files);
  };
}

export default ProfileContainer;
