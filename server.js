import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { loadFilesSync } from '@graphql-tools/load-files';
import path from 'path';
import { products } from './products/products.model.js';
import { orders } from './orders/orders.model.js';

const typesArray = loadFilesSync(path.resolve('**/*.graphql'));
const resolversArray = loadFilesSync(path.resolve('**/*.resolvers.js'));

const schema = makeExecutableSchema({
	typeDefs: [typesArray],
	resolvers: resolversArray,
});
const app = express();

app.use(express.json());
app.use(
	'/graphql',
	graphqlHTTP({
		schema: schema,
		graphiql: true,
	})
);

app.listen(3000, () => {
	console.log('Running GraphQl server in express....');
});
