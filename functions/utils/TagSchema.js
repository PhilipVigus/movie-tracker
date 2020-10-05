const mongoose = require("mongoose");

const { Schema } = mongoose;

const TagSchema = new Schema({ id: String });

module.exports = TagSchema;
