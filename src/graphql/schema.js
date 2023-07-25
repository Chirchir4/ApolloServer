// import { addUsers } from "../../dist/utils"


export const typeDefs=`#graphql
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
#   type Book {
#     title: String
#     author: String
#   }
type User{
  id:Int,
  password:String,
    name:String,
    email:String,
    job:String,
    project:[Project]
}
type Project{
   id:Int,
    title:String,
    status:String,
    members:[User]

}
type Mutation {
  addUsers(id: Int!, name: String!, email: String!, password: String!): User!
}
type Mutation {
  updateUser(id: Int!, name: String, email: String, password: String): User!
}
type Mutation{
  deleteUser(id: Int!, name: String, email: String, password: String): User!
}

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    users: [User]
  }
`