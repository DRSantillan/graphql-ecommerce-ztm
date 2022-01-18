import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { loadFilesSync } from '@graphql-tools/load-files';
import path from 'path';
import { allResolvers } from './resolvers/index.resolvers.js';


const typesArray = await loadFilesSync(path.resolve('**/*.graphql'));
const resolversArray = allResolvers;
console.log(resolversArray)
console.log(typesArray);
const schema = makeExecutableSchema({
	typeDefs: typesArray,
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
