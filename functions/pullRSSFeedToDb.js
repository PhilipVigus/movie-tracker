const getRssData = require("./utils/getRssData");
const parseRssData = require("./utils/parseRssData");
const populateDbWithTrailers = require("./utils/populateDbWithTrailers");

exports.handler = async (event) => {
  const rssData = await getRssData();
  const parsedData = parseRssData(rssData.data);
  await populateDbWithTrailers(parsedData);

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Hi ⊂◉‿◉つ",
      event
    })
  };
};
