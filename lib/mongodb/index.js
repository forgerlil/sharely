import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
if (!uri) throw new Error('Add Mongo URI to .env.local');

let client = new MongoClient(uri);

const getDB = async () => {
	const connection = await client.connect();
	return connection.db('sharely');
};

const getCollection = async (collectionName) => {
	const db = await getDB();
	return db.collection(collectionName);
};

export { getDB, getCollection };
