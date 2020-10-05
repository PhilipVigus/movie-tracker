import parseRssData from "../utils/parseRssData";
import rssTestData from "./fixtures/rssTestData";

describe("parseRssData", () => {
  it("parses the RssData", () => {
    const expectedResult = [
      {
        _id: "http://www.traileraddict.com/another-round-druk/trailer",
        title: "Another Round: Trailer",
        date: "Wed, 23 Sep 2020 10:58:54 -0700",
        link: "http://www.traileraddict.com/another-round-druk/trailer",
        image:
          "http://cdn.traileraddict.com/vidog/studiocanal/druk-poster/1.jpg",
        tags: [
          { _id: "Studio Canal" },
          { _id: "Drama" },
          { _id: "Mads Mikkelsen" },
          { _id: "Thomas Bo Larsen" }
        ]
      },
      {
        title: "Antebellum: TV Spot - Don't Give Away the Twist",
        _id:
          "http://www.traileraddict.com/antebellum-2020/tv-spot-dont-give-away-the-twist",
        date: "Wed, 23 Sep 2020 10:47:50 -0700",
        link:
          "http://www.traileraddict.com/antebellum-2020/tv-spot-dont-give-away-the-twist",
        image:
          "http://cdn.traileraddict.com/vidog/lionsgate/antebellum-2020-poster/1.jpg",
        tags: [
          { _id: "Lionsgate" },
          { _id: "Thriller" },
          { _id: "TV Spot" },
          { _id: "Janelle MonÃ¡e" }
        ]
      }
    ];

    expect(parseRssData(rssTestData)).toEqual(expectedResult);
  });
});
