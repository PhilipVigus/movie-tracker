import { transform } from "@babel/core";
import mongoose from "mongoose";
import TrailerSchema from "../../server/models/Trailer";

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
  console.log(trailers);

  try {
    await trailerModel.insertMany(trailers, { ordered: false });
  } catch (e) {
    // errors on duplicate ids
    // this is okay, as the RSS feed is often going to send
    // the same trailers on consecutive days so we just
    // ignore the duplicates
  }
};

module.exports = populateDbWithTrailers;
