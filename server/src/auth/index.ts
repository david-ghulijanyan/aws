import { readFileSync } from 'fs';
import { join } from 'path';

const authTypeDefs = readFileSync(join(__dirname, 'schema.graphql'), 'utf8');

export { authResolvers } from "./resolvers";
export { authTypeDefs };
export type { ISignUpArgs, ISignInArgs, ISignOutArgs } from './interfaces';
