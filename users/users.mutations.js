import client from "../client";
import bcrypt from "bcrypt";

export default {
  Mutation: {
    createAccount: async (
      _,
      { username, email, name, location, avatarURL, githubUsername, password }
    ) => {
        try {
          const existingUser = await client.user.findFirst({
            where: {
              OR: [{ username }, { email }],
            },
          });
          console.log(existingUser);
          if (existingUser) {
            throw new Error("This username/password is already taken.");
          }
          const uglyPassword = await bcrypt.hash(password, 10);
          return {
            ok: true,  
            data: client.user.create({
            data: {
              username,
              email,
              name,
              location,
              avatarURL,
              githubUsername,
              password: uglyPassword,
            },
          })};
        } catch (e) {
          return {
            ok: false,
            error: e,
          };
        }
    },
  },

  login: async (_, {username, password}) => {
      // 1. username
      const user = await client.user.findUnique({where: {username}})
      if (!user) {
          return {
              ok: false,
              error: "User not found."
          }
      }
      // 2. password
      const passwordOK = await bcrypt.compare(password, user.password)
      await client.user.findFirst()
  }
};
