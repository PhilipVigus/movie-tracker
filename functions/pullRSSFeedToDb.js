const getRssData = require("../utils/getRssData");

exports.handler = async (event) => {
  console.log(process.env.NODE_ENV);
  console.log("here");
  await getRssData();
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Hi ⊂◉‿◉つ",
      event,
    }),
  };
};
