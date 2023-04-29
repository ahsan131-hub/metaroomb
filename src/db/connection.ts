import mongoose from "mongoose";

// mongodb connection
export default async (url: string) => {
  console.log(url);
  return await mongoose.connect(url);
};
