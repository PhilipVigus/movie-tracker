const axios = require("axios");

const getRssData = async () => {
  console.log("there");
  console.log(process.env.NODE_ENV);
  try {
    const data = await axios.get("https://www.traileraddict.com/rss");
    return data;
  } catch (e) {
    return { error: e.message };
  }
};

module.exports = getRssData;
