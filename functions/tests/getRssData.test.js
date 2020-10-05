import Axios from "axios";
import MockAdapter from "axios-mock-adapter";
import getRssData from "../utils/getRssData";
import rssTestData from "./fixtures/rssTestData";

Axios.defaults.adapter = require("axios/lib/adapters/http");

describe("getRssData", () => {
  it("returns the RSS feed", async () => {
    const axiosMock = new MockAdapter(Axios);
    axiosMock
      .onGet("https://www.traileraddict.com/rss")
      .reply(200, rssTestData);

    const rssData = await getRssData();
    expect(rssData.data).toEqual(rssTestData);

    axiosMock.restore();
  });
});
