export interface ISignUpArgs {
	username: string;
	email: string;
	password: string;
	firstName: string;
	lastName: string;
}

export interface ISignInArgs {
	username: string;
	password: string;
}

export interface ISignOutArgs {
	accessToken: string;
}