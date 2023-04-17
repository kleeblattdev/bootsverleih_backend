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

//add boat
export const addBoat = async (req, res) => {
	const db = await getDb();
	const docs = await db.collection(COL).insertOne(req.body);
	res.json();
};

//remove boat
export const removeBoat = async (req, res) => {
	const db = await getDb();
	const del = await db
		.collection(COL)
		.findOneAndDelete({ _id: new ObjectId(req.body.id) });
	res.end();
};
