import React from "react";
import { Mutation } from "react-apollo";
import { RouteComponentProps } from "react-router-dom";
import { toast } from "react-toastify";
import {
  requestCoupleVerification,
  requestCoupleVerificationVariables
} from "../../types/api";
import RequestCoupleVerificationPresenter from "./RequestCoupleVerificationPresenter";
import { REQUEST_COUPLE_VERIFICATION } from "./RequestCoupleVerificationQueries.queries";

interface IState {
  partnerPhoneNumber: string;
}

class CoupleVerificationMutation extends Mutation<
  requestCoupleVerification,
  requestCoupleVerificationVariables
> {}

class RequestCoupleVerificationContainer extends React.Component<
  RouteComponentProps<any>,
  IState
> {
  public state = {
    partnerPhoneNumber: ""
  };
  public render() {
    const { partnerPhoneNumber } = this.state;
    return (
      <CoupleVerificationMutation
        mutation={REQUEST_COUPLE_VERIFICATION}
        variables={{ partnerPhoneNumber }}
        onCompleted={data => {
          const { RequestCoupleVerification } = data;
          if (RequestCoupleVerification.ok) {
            toast("인증번호를 보냈습니다. 잠시만 기다려 주세요!");
            setTimeout(() => {
              this.props.history.push("/wethere-client/verify-couple/waiting");
            }, 3000);
          } else {
            toast(RequestCoupleVerification.error);
            setTimeout(() => {
              this.props.history.push("/wethere-client/");
            });
          }
        }}
      >
        {coupleMutation => (
          <RequestCoupleVerificationPresenter
            partnerPhoneNumber={partnerPhoneNumber}
            onInputChange={this.onInputChange}
            onSubmit={coupleMutation}
          />
        )}
      </CoupleVerificationMutation>
    );
  }
  public onInputChange: React.ChangeEventHandler<HTMLInputElement> = event => {
    const {
      target: { name, value }
    } = event;
    this.setState({
      [name]: value
    } as any);
  };
}

export default RequestCoupleVerificationContainer;
