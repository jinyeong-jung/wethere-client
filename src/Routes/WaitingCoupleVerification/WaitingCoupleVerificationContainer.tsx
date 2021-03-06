import React from "react";
import { Query } from "react-apollo";
import { RouteComponentProps } from "react-router-dom";
import { toast } from "react-toastify";
import { getMyProfile } from "src/types/api";
import { USER_PROFILE } from "../../sharedQueries.queries";
import WaitingCoupleVerificationPresenter from "./WaitingCoupleVerificationPresenter";

class ProfileQuery extends Query<getMyProfile> {}

class WaitingCoupleVerificationContainer extends React.Component<
  RouteComponentProps
> {
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
                if (
                  user!.coupleForPartnerOneId === null &&
                  user!.coupleForPartnerTwoId === null
                ) {
                  setTimeout(() => {
                    this.props.history.push("/wethere-client/verify-couple");
                  }, 2000);
                }
                if (user!.verifiedCouple) {
                  toast("커플 등록이 완료되었습니다 💌");
                  setTimeout(() => {
                    this.props.history.push("/wethere-client/initial-profile");
                  }, 3000);
                }
              }
            }
          }
          return <WaitingCoupleVerificationPresenter />;
        }}
      </ProfileQuery>
    );
  }
}

export default WaitingCoupleVerificationContainer;
