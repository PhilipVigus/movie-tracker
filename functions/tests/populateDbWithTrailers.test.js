import mongoose from "mongoose";
import populateDbWithTrailers from "../utils/populateDbWithTrailers";

describe("populateDbWithTrailers", () => {
  it("populates the database with trailers", async () => {
    const uri = "mongodb://127.0.0.1/movie-tracker-test";

    const dbConnection = await mongoose.createConnection(uri, {
      bufferCommands: false,
      bufferMaxEntries: 0,
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    dbConnection.model(
      "Trailer",
      new mongoose.Schema({
        title: String
      })
    );

    const trailerModel = dbConnection.model("Trailer");
    const trailerData = [{ title: "Trailer 1" }, { title: "Trailer 2" }];

    await populateDbWithTrailers(trailerData);
    const trailers = await trailerModel.find();
    expect(trailers.length).toEqual(2);

    await trailerModel.deleteMany({});
    await mongoose.disconnect();
  });
});
