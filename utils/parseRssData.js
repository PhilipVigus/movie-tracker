const { parseString } = require("xml2js");

const parseRssData = (data) => {
  const trailers = [];
  parseString(data, (err, result) => {
    const trailersAsJson = result.rss.channel[0].item;

    trailersAsJson.forEach((trailer) => {
      const imageLink = trailer.description[0].match(/<img src="(.*)" \/>/)[1];
      trailers.push({
        guid: trailer.guid[0],
        title: trailer.title[0],
        link: trailer.link[0],
        image: imageLink,
      });
    });
  });
  return trailers;
};

module.exports = parseRssData;
