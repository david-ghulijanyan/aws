import { PropsWithChildren } from "react";

export interface IFormProps extends PropsWithChildren {
	onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
	testId?: string;
}
