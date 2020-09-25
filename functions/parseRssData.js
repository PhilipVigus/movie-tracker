import { json } from "express";

var parseString = require("xml2js").parseString;

const parseRssData = (data) => {
  const trailers = [];
  parseString(data, function (err, result) {
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
