

import { getUsers,addUsers,updateUser ,deleteUser} from "../../dist/utils.js"

export const resolvers=
     { Query: {
        users: () => getUsers(),
      },
      Mutation: {
        addUsers: async (_, { id, name, email, password }) => {
          try {
           const newUser= await addUsers(id, name, email, password);
           return newUser
          
          } catch (error) {
            console.error(error);
            throw new Error("Failed to add user.");
          }
        },}
      ,
      Mutation: {
        updateUser: async (_, { id, name, email, password }) => {
          try {
            const updatedUser = await updateUser( id, name, email, password);
            return updatedUser;
          } catch (error) {
            console.error(error);
            throw new Error("Failed to update user.");
          }
        },
      },
      Mutation: {
        deleteUser: async (_, { id, name, email, password }) => {
          try {
            const deletedUser = await deleteUser(id, name, email, password);
            return deletedUser; // Return the deleted user
          } catch (error) {
            console.error(error);
            // Handle the error and return a value that matches the return type User!
            return null; // Return null in case of an error (you can adjust this as needed)
          }
        },
      }
  }
