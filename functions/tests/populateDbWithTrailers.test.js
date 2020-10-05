import mongoose from "mongoose";
const TrailerSchema = require("../utils/TrailerSchema");
import populateDbWithTrailers from "../utils/populateDbWithTrailers";

describe("populateDbWithTrailers", () => {
  const trailerData = [
    {
      id: "guid1",
      title: "Trailer1",
      date: "date1",
      link: "link1",
      image: "image1",
      tags: [{ id: "Tag1" }, { id: "Tag2" }]
    },
    {
      id: "guid2",
      title: "Trailer2",
      date: "date2",
      link: "link2",
      image: "image2",
      tags: [{ id: "Tag1" }, { id: "Tag2" }]
    }
  ];

  const uri = "mongodb://127.0.0.1/movie-tracker-test";
  let dbConnection;
  let trailerModel;

  beforeEach(async () => {
    dbConnection = await mongoose.createConnection(uri, {
      bufferCommands: false,
      bufferMaxEntries: 0,
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    dbConnection.model("Trailer", TrailerSchema);
    trailerModel = dbConnection.model("Trailer");
  });

  afterEach(async () => {
    await trailerModel.deleteMany({});
  });

  afterAll(async () => {
    await dbConnection.close();
  });

  it("populates the database with trailers", async () => {
    await populateDbWithTrailers(trailerData);
    const trailers = await trailerModel.find();
    expect(trailers.length).toEqual(2);
  });

  it("prevents duplicate trailers from being added", async () => {
    const newTrailerData = [
      {
        id: "guid1",
        title: "Trailer1",
        date: "date1",
        link: "link1",
        image: "image1",
        tags: [{ id: "Tag1" }, { id: "Tag2" }]
      },
      {
        id: "guid3",
        title: "Trailer3",
        date: "date3",
        link: "link3",
        image: "image3",
        tags: [{ id: "Tag1" }, { id: "Tag2" }]
      }
    ];
    await populateDbWithTrailers(trailerData);
    await populateDbWithTrailers(newTrailerData);

    const trailers = await trailerModel.find();
    expect(trailers.length).toEqual(3);
  });
});
