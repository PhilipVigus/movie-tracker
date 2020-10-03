import parseRssData from "../../utils/parseRssData";
import rssTestData from "./fixtures/rssTestData";

describe("parseRssData", () => {
  it("parses the RssData", () => {
    const expectedResult = [
      {
        guid: "http://www.traileraddict.com/another-round-druk/trailer",
        title: "Another Round: Trailer",
        link: "http://www.traileraddict.com/another-round-druk/trailer"
      },
      {
        title: "Antebellum: TV Spot - Don't Give Away the Twist",
        guid:
          "http://www.traileraddict.com/antebellum-2020/tv-spot-dont-give-away-the-twist",
        link:
          "http://www.traileraddict.com/antebellum-2020/tv-spot-dont-give-away-the-twist"
      }
    ];

    expect(parseRssData(rssTestData)).toEqual(expectedResult);
  });
});
