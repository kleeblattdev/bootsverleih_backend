import { ObjectId } from "mongodb";
import { getDb } from "../utils/db.js";

const COL = "reservations";

//get all reservations
export const getReservations = async (req, res) => {
	const db = await getDb();
	const docs = await db.collection(COL).find().toArray();
	if (docs === null) res.end();
	else {
		res.json(docs);
	}
};

//add reservation
export const addReservation = async (req, res) => {
	const db = await getDb();
	const docs = await db.collection(COL).insertOne(req.body);
	res.json();
};

//delete a reservation
export const deleteReservation = async (req, res) => {
	const db = await getDb();
	const del = db
		.collection(COL)
		.findOneAndDelete({ _id: new ObjectId(req.body.id) });
	res.end();
};
