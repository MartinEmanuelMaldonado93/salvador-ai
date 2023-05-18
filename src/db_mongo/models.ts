import { ObjectId } from "mongodb";

export type Props = {
  posts: [Post];
};

export type Post = {
  _id?: ObjectId;
  title: String;
  content: String;
};
