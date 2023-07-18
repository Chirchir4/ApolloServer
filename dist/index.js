import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDefs } from "../src/graphql/schema.js";
import { resolvers } from "../src/graphql/resolvers.js";
import { client } from "../database/mockdb.js";
client.connect((err) => {
    client.query('SELECT $1::text as message', ['Hello world!'], (err, res) => {
        console.log(err ? err.stack : res.rows[0].message); // Hello World!
        client.end();
    });
});
const server = new ApolloServer({
    typeDefs,
    resolvers,
});
const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
});
console.log(`🚀  Server ready at: ${url}`);
