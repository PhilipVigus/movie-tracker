import parseRssData from "../utils/parseRssData";
import rssTestData from "./fixtures/rssTestData";

describe("parseRssData", () => {
  it("parses the RssData", () => {
    const expectedResult = [
      {
        guid: "http://www.traileraddict.com/another-round-druk/trailer",
        title: "Another Round: Trailer",
        date: "Wed, 23 Sep 2020 10:58:54 -0700",
        link: "http://www.traileraddict.com/another-round-druk/trailer",
        image:
          "http://cdn.traileraddict.com/vidog/studiocanal/druk-poster/1.jpg",
        tags:
          '<a href="http://www.traileraddict.com/tags/studiocanal">Studio Canal</a>, <a href="http://www.traileraddict.com/tags/drama">Drama</a>, <a href="http://www.traileraddict.com/tags/mads-mikkelsen">Mads Mikkelsen</a>, <a href="http://www.traileraddict.com/tags/thomas-bo-larsen">Thomas Bo Larsen</a>'
      },
      {
        title: "Antebellum: TV Spot - Don't Give Away the Twist",
        guid:
          "http://www.traileraddict.com/antebellum-2020/tv-spot-dont-give-away-the-twist",
        date: "Wed, 23 Sep 2020 10:47:50 -0700",
        link:
          "http://www.traileraddict.com/antebellum-2020/tv-spot-dont-give-away-the-twist",
        image:
          "http://cdn.traileraddict.com/vidog/lionsgate/antebellum-2020-poster/1.jpg",
        tags:
          '<a href="http://www.traileraddict.com/tags/lionsgate">Lionsgate</a>, <a href="http://www.traileraddict.com/tags/thriller">Thriller</a>, <a href="http://www.traileraddict.com/tags/tv-spot">TV Spot</a>, <a href="http://www.traileraddict.com/tags/janelle-monae">Janelle MonÃ¡e</a>'
      }
    ];

    expect(parseRssData(rssTestData)).toEqual(expectedResult);
  });
});
