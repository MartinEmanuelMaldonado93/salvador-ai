"use server";
import { enviroments } from "@/env.mjs";
import clientPromise from "@/db_mongo/mongodb";
import { useStore } from "@/store";
import { formOpenAI } from "@/types";

export async function saveImage(props: formOpenAI) {
  const { photo_url, prompt, user_name } = props;

  useStore.setState({
    photo_url,
    user_name,
    prompt,
  });

  // MongoDB client
  const client = await clientPromise;
  const db = client.db(enviroments.MONGODB_DB);
  const post = db.collection(enviroments.MONGODB_COLL);
  post.insertOne({
    user_name,
    prompt,
    photo_url,
  });
}

export async function deletePostsByName(user_name: string) {
  const client = await clientPromise;
  const db = client.db(enviroments.MONGODB_DB);
  const post = db.collection(enviroments.MONGODB_COLL);
  post.deleteMany({
    $where: function () {
      return this.user_name === user_name;
    },
  });
}

export async function getImagesByUser(user_name: string) {
  if (!user_name || user_name === "") throw new Error('user name not defined')

  const client = await clientPromise;
  const db = client.db(enviroments.MONGODB_DB);
  const post = db.collection(enviroments.MONGODB_COLL);

  const posts = await post.find({ user_name: { $eq: user_name } }).toArray();

  const postsWithIDFixed = posts.map((item) => ({ ...item, _id: item._id.toString() }))
  return postsWithIDFixed;
}
