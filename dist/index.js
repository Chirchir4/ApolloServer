import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDefs } from "../src/graphql/schema.js";
import { resolvers } from "../src/graphql/resolvers.js";
const server = new ApolloServer({
    typeDefs,
    resolvers,
});
// addUsers(9,"ff3","ff@gmail","1234")
const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
});
console.log(`🚀  Server ready at: ${url}`);
