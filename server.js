import express from 'express';

import { buildSchema } from 'graphql';
import { graphqlHTTP } from 'express-graphql';
const app = express();
const schema = buildSchema(`
type Query {
    description: String
    price: Float
}
`);

const root = {
	description: 'Red Shoe',
	price: 43.22,
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
