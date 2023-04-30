import { Schema, model, Model } from "mongoose";
import { ContentModel, IContent_d } from "./content.types";
import bcrypt from "bcrypt";
import { ObjectId } from "mongodb";
import mongoose from "mongoose";
const schema = new Schema<IContent_d, ContentModel>(
  {
    name: {
      type: String,
      trim: true,
      minlength: 3,
      maxlength: 50,
      required: true,
    },
    instructorId: { type: mongoose.Types.ObjectId, ref: "User" },
    deadline: String,
    contentFiles: { type: [String] },
    contentType: {
      type: String,
      enum: ["ASSIGNMENT", "CONTENT"],
      default: "CONTENT",
      required: true,
    },
    description: {
      type: String,
      minlength: 10,
      required: true,
    },
    contentSubmissions: { type: [String] },
  },
  { timestamps: true, strict: true }
);

const Content = model<IContent_d, ContentModel>("Content", schema);

export default Content;
