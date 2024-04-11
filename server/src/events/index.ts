import { readFileSync } from 'fs';
import { join } from 'path';

const eventsTypeDefs = readFileSync(join(__dirname, 'schema.graphql'), 'utf8');

export { eventsResolvers } from "./resolvers";
export { eventsTypeDefs };
export type { IEventArgs } from "./interfaces";