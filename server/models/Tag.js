import mongoose from "mongoose";

const { Schema } = mongoose;

const TagSchema = new Schema({ _id: String });

export default TagSchema;
