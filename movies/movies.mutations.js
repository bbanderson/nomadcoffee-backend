import client from "../client";

export default {
  Mutation: {
    createMovie: (_, { title, year, genre }) =>
      client.movie.create({ data: { title, year, genre } }),
    deleteMovie: (_, args) => {
      console.log(args);
    },
  },
};
