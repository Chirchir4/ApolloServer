import { users } from "../../database/mockdb.js"

export const resolvers=
     { Query: {
        users: () => users,
      },}
