import { getImagesByUser } from "@/db_mongo/actions";
import { NextRequest, NextResponse } from "next/server"

export async function POST(request: Request) {
	try {
		const user_name = await request.json();
		const img_url = await getImagesByUser({ user_name });
		if (!Array.isArray(img_url)) throw new Error('gallery failed');

		return NextResponse.json(img_url);
	}
	catch (e) {
		console.log(e)
	}
}

export async function DELETE(request: Request) {
	const r = await request.json();
	// console.log(r);
	return NextResponse.json('hello from api/gallery');
}

export async function GET(request: Request) {
	const r = await request.json();
	console.log(r)
	// const img_url = getImagesByUser();
	return NextResponse.json('hello from api/gallery');
}