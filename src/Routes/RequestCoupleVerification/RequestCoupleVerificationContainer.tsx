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
            // 아래 push 부분 수정 요망. 파트너 수락 대기시 페이지 작성?
            setTimeout(() => {
              this.props.history.push("/");
            }, 3000);
          } else {
            toast(RequestCoupleVerification.error);
            setTimeout(() => {
              this.props.history.push("/");
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
