import { parseString } from "xml2js";

const parseRssData = (data) => {
  const trailers = [];
  parseString(data, (err, result) => {
    const trailersAsJson = result.rss.channel[0].item;

    trailersAsJson.forEach((trailer) => {
      trailers.push({
        title: trailer.title[0],
      });
    });
  });
  return trailers;
};

export default parseRssData;
