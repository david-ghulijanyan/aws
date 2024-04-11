import { authResolvers } from "../auth";
import { eventsResolvers } from "../events";

const resolvers = {
	Query: {
		...authResolvers.Query,
		...eventsResolvers.Query,
	},
	Mutation: {
		...authResolvers.Mutation,
		...eventsResolvers.Mutation,
	},
};

export { resolvers };
