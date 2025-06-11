import { getCollection } from '@/lib/mongodb';
import { ObjectId } from 'mongodb';

export async function GET(request, { params }) {
	try {
		const collection = await getCollection('entries');
		const { id } = params;

		if (!ObjectId.isValid(id)) {
			return Response.json({ message: 'Invalid entry ID' }, { status: 400 });
		}

		const entry = await collection.findOne({ _id: new ObjectId(id) });

		if (!entry) {
			return Response.json({ message: 'Entry not found' }, { status: 404 });
		}

		return Response.json(entry);
	} catch (error) {
		return Response.json({ message: 'Error fetching entry' }, { status: 500 });
	}
}
