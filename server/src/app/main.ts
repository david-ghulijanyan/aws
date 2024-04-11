import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { resolvers } from './resolvers';
import { typeDefs } from './typeDefs';

import { PORT } from "./configs";

import "./aws";

async function startApolloServer(typeDefinitions: typeof typeDefs, resolversList: typeof resolvers) {
	const server = new ApolloServer({ typeDefs: typeDefinitions, resolvers: resolversList });
	await server.start();

	const app = express() as any;
	server.applyMiddleware({ app });

	app.listen(PORT, () => {
		console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`);
	});
}

startApolloServer(typeDefs, resolvers);
