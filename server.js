import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { loadFilesSync } from '@graphql-tools/load-files';
import path from 'path';
import { products } from './products/products.model.js';
import { orders } from './orders/orders.model.js';

const typesArray = loadFilesSync(path.resolve('**/*.graphql'));
const schema = makeExecutableSchema({
	typeDefs: [typesArray],
	resolvers: {
		Query: {
			products: async parent => {
				console.log('getting the products...');
				const products = await Promise.resolve(parent.products)
				return products;
			},
			orders: async parent => {
				console.log('getting orders....');
				const orders = await Promise.resolve(parent.orders);
				return orders;
			},
		},
	},
});
const app = express();

const root = {
	products,
	orders,
};

app.use(express.json());
app.use(
	'/graphql',
	graphqlHTTP({
		schema: schema,
		rootValue: root,
		graphiql: true,
	})
);

app.listen(3000, () => {
	console.log('Running GraphQl server in express....');
});
