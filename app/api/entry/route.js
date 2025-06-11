import { getCollection } from '@/lib/mongodb';

export async function GET(request) {
	const collection = await getCollection('entries');
	const entries = await collection.find({}).toArray();
	return Response.json(entries);
}

export async function POST(request) {
	const collection = await getCollection('entries');

	const { title, description, username, image } = await request.json();

	if (!title || !description || !username || !image) {
		return Response.json(
			{ message: 'Missing required fields' },
			{ status: 400 }
		);
	}

	await collection.insertOne({
		title,
		description,
		username,
		image,
	});

	return Response.json({ message: 'New entry added' }, { status: 201 });
}
