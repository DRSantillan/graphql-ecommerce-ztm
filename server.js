import express from 'express';

import { buildSchema } from 'graphql';
import { graphqlHTTP } from 'express-graphql';
const app = express();
const schema = buildSchema(`
	type Query {
		products: [Product]
		orders: [Order]
	}

	type Product {
		id: ID!
		description: String!
		reviews: [Review]
		price: Float!
	}

	type Review {
		rating: Int!
		comment: String
	}

	type Order {
		date: String!
		subtotal: Float!
		items: [OrderItem]
	}

	type OrderItem {
		 product: Product!
		 quantity: Int!
	}
`);

const root = {
	products: [
		{
			id: 'redshoe',
			description: 'Red Shoe',
			price: 39.99,
			reviews: [
				{
					rating: 5,
					comment: 'absolutely beautiful shoes',
				},
			],
		},
		{
			id: 'bluejean',
			description: 'Blue Jean',
			price: 59.99,
		},
	],
	orders: [
		{
			date: '2022-01-10',
			subtotal: 98.99,
			items: [
				{
					product: {
						id: 'redshoe',
						description: 'old red shoe from long ago',
						price: 49.99,
						reviews: [
							{
								rating: 5,
								comment: 'absolutely beautiful shoes',
							},
						],
					},
					quantity: 2,
				},
			],
		},
	],
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
