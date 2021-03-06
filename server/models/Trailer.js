import mongoose from "mongoose";
import TagSchema from "./Tag";

const { Schema } = mongoose;

const TrailerSchema = new Schema({
  _id: String,
  title: {
    type: String,
    unique: false,
    required: true
  },
  date: {
    type: String,
    unique: false,
    required: true
  },
  link: {
    type: String,
    unique: false,
    required: true
  },
  image: {
    type: String,
    unique: false,
    required: true
  },
  tags: [TagSchema]
});

export default TrailerSchema;
