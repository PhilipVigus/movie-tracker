import mongoose from "mongoose";

const { Schema } = mongoose;

const TrailerSchema = new Schema({
  guid: String,
  title: String,
  date: String,
  link: String,
  image: String,
  tags: String
});

export default TrailerSchema;
