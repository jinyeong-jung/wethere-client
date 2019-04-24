import React from "react";
import { Mutation } from "react-apollo";
import { RouteComponentProps } from "react-router-dom";
import { toast } from "react-toastify";
import {
  completeCoupleVerification,
  completeCoupleVerificationVariables
} from "../../types/api";
import CompleteCoupleVerificationPresenter from "./CompleteCoupleVerificationPresenter";
import { COMPLETE_COUPLE_VERIFICATION } from "./CompleteCoupleVerificationQueries.queries";

interface IState {
  phoneNumber: string;
  verificationKey: string;
}

class CoupleVerificationMutation extends Mutation<
  completeCoupleVerification,
  completeCoupleVerificationVariables
> {}

class CompleteCoupleVerificationContainer extends React.Component<
  RouteComponentProps<any>,
  IState
> {
  public state = {
    phoneNumber: "",
    verificationKey: ""
  };
  public render() {
    const { phoneNumber, verificationKey } = this.state;
    return (
      <CoupleVerificationMutation
        mutation={COMPLETE_COUPLE_VERIFICATION}
        variables={{ phoneNumber, key: verificationKey }}
        onCompleted={data => {
          const { CompleteCoupleVerification } = data;
          if (CompleteCoupleVerification.ok) {
            toast("커플 등록이 완료되었습니다 💌");
            setTimeout(() => {
              this.props.history.push("/initial-profile");
            }, 3000);
          } else {
            toast(CompleteCoupleVerification.error);
            setTimeout(() => {
              this.props.history.push("/");
            });
          }
        }}
      >
        {coupleMutation => (
          <CompleteCoupleVerificationPresenter
            phoneNumber={phoneNumber}
            verificationKey={verificationKey}
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

export default CompleteCoupleVerificationContainer;
