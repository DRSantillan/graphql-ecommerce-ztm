import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { loadFilesSync } from '@graphql-tools/load-files';
import path from 'path';
import { allResolvers } from './resolvers/index.resolvers.js';

const typesArray = await loadFilesSync(path.resolve('**/*.graphql'));
const resolversArray = allResolvers;

const startApolloServer = async () => {
	const app = express();

	const schema = makeExecutableSchema({
		typeDefs: typesArray,
		resolvers: resolversArray,
	});

	const server = new ApolloServer({
		schema,
	});

	await server.start();
	server.applyMiddleware({ app, path: '/graphql' });

	app.listen(3000, () => {
		console.log('Running Apollo GraphQl server in express....');
	});
};

startApolloServer();
