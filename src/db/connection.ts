import mongoose from "mongoose";

// mongodb connection
export default async (url: string) => {
  return await mongoose.connect(url);
};
