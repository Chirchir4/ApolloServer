import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

import {typeDefs} from "../src/graphql/schema.js"
import {resolvers}from "../src/graphql/resolvers.js"

const server = new ApolloServer({
    typeDefs,
    resolvers,
  });
  

  const { url }: { url: string } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });
  
  console.log(`🚀  Server ready at: ${url}`);