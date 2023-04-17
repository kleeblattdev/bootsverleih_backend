import { getDb } from "../utils/db.js";
import { ObjectId } from "mongodb";

const COL = "boats";

//get all boats
export const getBoats = async (req, res) => {
	const db = await getDb();
	const docs = await db.collection(COL).find().toArray();
	if (docs === null) res.end();
	else {
		res.json(docs);
	}
};

//get one Boat for Detailpage
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

//add boat
export const addBoat = async (req, res) => {
	const db = await getDb();
	const docs = await db.collection(COL).insertOne(req.body);
	res.json();
};

//delete boat
export const deleteBoat = async (req, res) => {
	const db = await getDb();
	const del = await db
		.collection(COL)
		.findOneAndDelete({ _id: new ObjectId(req.body.id) });
	res.end();
};
