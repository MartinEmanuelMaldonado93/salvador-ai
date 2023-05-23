import { getImagesByUser } from "@/db_mongo/actions";
import { NextRequest, NextResponse } from "next/server"

export async function POST(request: Request) {
	// post ...
}

export async function DELETE(request: Request) {
	// delete item...
}

export async function GET(request: Request ) {
	try {
		const { searchParams } = new URL(request.url);
		const img_url = await getImagesByUser({ user_name: searchParams.get("user") });
		
		if (!Array.isArray(img_url)) throw new Error('gallery failed');

		return NextResponse.json(img_url);
	}
	catch (e) {
		console.log(e)
	}
}