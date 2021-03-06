const mongoose = require("mongoose");
const TrailerSchema = require("./TrailerSchema");

const populateDbWithTrailers = async (trailers) => {
  let uri;

  if (process.env.NODE_ENV === "dev") {
    uri = "mongodb://127.0.0.1/movie-tracker-dev";
  } else if (process.env.NODE_ENV === "test") {
    uri = "mongodb://127.0.0.1/movie-tracker-test";
  } else {
    // set the uri to the production database
  }

  const dbConnection = await mongoose.createConnection(uri, {
    bufferCommands: false,
    bufferMaxEntries: 0,
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  dbConnection.model("Trailer", TrailerSchema);

  const trailerModel = dbConnection.model("Trailer");

  const results = [];
  for (const trailer of trailers) {
    const trailerExists = await trailerModel.exists({ id: trailer.id });
    if (!trailerExists) {
      try {
        await trailerModel.create(trailer);
      } catch (e) {
        console.log(e);
      }
    }
  }

  await Promise.all(results);
};

module.exports = populateDbWithTrailers;
