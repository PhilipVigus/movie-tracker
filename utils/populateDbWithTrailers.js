const mongoose = require("mongoose");

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
    useUnifiedTopology: true,
  });

  dbConnection.model(
    "Trailer",
    new mongoose.Schema({
      title: String,
    })
  );

  const trailerModel = dbConnection.model("Trailer");
  await trailerModel.insertMany(trailers, { ordered: false });
};

module.exports = populateDbWithTrailers;
