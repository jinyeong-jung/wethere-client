import React from "react";
import { Query } from "react-apollo";
import { RouteComponentProps } from "react-router-dom";
import { toast } from "react-toastify";
import { getMyProfile } from "src/types/api";
import { USER_PROFILE } from "../../sharedQueries.queries";
import CoupleVerificationPresenter from "./CoupleVerificationPresenter";

class ProfileQuery extends Query<getMyProfile> {}

class CoupleVerificationContainer extends React.Component<RouteComponentProps> {
  public render() {
    return (
      <ProfileQuery query={USER_PROFILE} pollInterval={500}>
        {profileData => {
          if (profileData) {
            if (profileData.data) {
              if (profileData.data.GetMyProfile) {
                const {
                  GetMyProfile: { user }
                } = profileData.data;
                if (user!.verifiedCouple) {
                  toast("이미 커플로 등록되었습니다.");
                  this.props.history.push("/wethere-client/");
                }
                if (user!.coupleForPartnerOneId) {
                  this.props.history.push(
                    "/wethere-client/verify-couple/waiting"
                  );
                }
              }
            }
          }
          return <CoupleVerificationPresenter />;
        }}
      </ProfileQuery>
    );
  }
}

export default CoupleVerificationContainer;
