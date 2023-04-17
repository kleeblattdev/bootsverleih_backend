import { getDb } from "../utils/db.js";
import { ObjectId } from "mongodb";

const COL = "boats";

//Handler function for retrieving all boats from the database
export const getBoats = async (req, res) => {
	//Establish a connection to the database
	const db = await getDb();
	const docs = await db.collection(COL).find().toArray();
	//if no doc are found, send an empty response
	if (docs === null) res.end();
	//otherwise, send the doc as a JSON response
	else {
		res.json(docs);
	}
};

//Handler function for retrieving a single boat by its ID from the database
export const getBoatDetail = async (req, res) => {
	const db = await getDb();
	const doc = await db
		.collection(COL)
		.find({ _id: new ObjectId(req.params.boatId) })
		.toArray();
	if (doc === null) res.end();
	else {
		res.json(doc);
	}
};

// Handler function for adding a new boat to the database
export const addBoat = async (req, res) => {
	const db = await getDb();
	const docs = await db.collection(COL).insertOne(req.body);
	res.json();
};

// Handler function for deleting a boat from the database
export const deleteBoat = async (req, res) => {
	const db = await getDb();
	const del = await db
		.collection(COL)
		.findOneAndDelete({ _id: new ObjectId(req.body.id) });
	res.end();
};
