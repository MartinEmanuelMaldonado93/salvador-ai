"use server";
import { enviroments } from "@/env.mjs";
import clientPromise from "@/db_mongo/mongodb";
import { useServerStore } from "@/store";
import { formOpenAI, PostsType } from "@/types";

export async function saveImage({ photo_url, prompt, user_name }: formOpenAI) {
  if (!photo_url || !prompt || !user_name)
    throw new Error("Some fields provided are empty");

  const lowerUserName = user_name.toLowerCase();
  useServerStore.setState({
    photo_url,
    user_name: lowerUserName,
    prompt,
  });

  try {
    // MongoDB client
    const client = await clientPromise;
    const db = client.db(enviroments.MONGODB_DB);
    const post = db.collection(enviroments.MONGODB_COLL);
    post.insertOne({
      user_name: lowerUserName,
      prompt,
      photo_url,
    });
    console.log("saved!");
    return true;
  } catch {
    throw new Error("couldn't save the file");
  }
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

export async function getImagesByUser({
  user_name,
}: {
  user_name?: string | null;
}): Promise<PostsType[]> {
  if (!user_name) throw new Error("user name not defined");
  const lowerUserName = user_name.toLowerCase();

  const client = await clientPromise;
  const db = client.db(enviroments.MONGODB_DB);
  const post = db.collection(enviroments.MONGODB_COLL);

  const posts = await post
    .find({ user_name: { $eq: lowerUserName } })
    .toArray();
  if (!posts || !posts.length)
    throw new Error(
      `User [${lowerUserName}] doesnt exist or dont have posts yet`
    );

  const postsWithIDFixed = posts.map((item) => ({
    ...item,
    _id: item._id.toString() /** _id must be returned as string and not objectid etc. mongo type */,
  }));
  return postsWithIDFixed as PostsType[];
}
