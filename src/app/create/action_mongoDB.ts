'use server';
import { enviroments } from "@/env.mjs";
import clientPromise from "@/mongo/mongodb";
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
		title: user_name,
		user_name,
		photo_url,
	});

}

export async function deleteItems() {
	const client = await clientPromise;
	const db = client.db(enviroments.MONGODB_DB);
	const post = db.collection(enviroments.MONGODB_COLL);
	post.deleteMany({ $where: function () { return this.user_name === 'john doe' } })

}