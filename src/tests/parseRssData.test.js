import parseRssData from "../../functions/parseRssData";
import rssTestData from "./fixtures/rssTestData";

describe("parseRssData", () => {
  it("parses the RssData", () => {
    const expectedResult = [
      { title: "Another Round: Trailer" },
      { title: "Antebellum: TV Spot - Don't Give Away the Twist" },
    ];

    expect(parseRssData(rssTestData)).toEqual(expectedResult);
  });
});
