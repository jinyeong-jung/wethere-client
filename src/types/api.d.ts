/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: signUpEnd
// ====================================================

export interface signUpEnd_SignUpEnd {
  __typename: "SignUpEndResponse";
  ok: boolean;
  error: string | null;
}

export interface signUpEnd {
  SignUpEnd: signUpEnd_SignUpEnd;
}

export interface signUpEndVariables {
  phoneNumber: string;
  key: string;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: signUpStart
// ====================================================

export interface signUpStart_SignUpStart {
  __typename: "SignUpStartResponse";
  ok: boolean;
  error: string | null;
}

export interface signUpStart {
  SignUpStart: signUpStart_SignUpStart;
}

export interface signUpStartVariables {
  username: string;
  password: string;
  phoneNumber: string;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

//==============================================================
// END Enums and Input Objects
//==============================================================
