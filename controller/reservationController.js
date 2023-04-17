import { ObjectId } from "mongodb";
import { getDb } from "../utils/db.js";

const COL = "reservations";

//Handler function for retrieving all reservations from the database
export const getReservations = async (req, res) => {
	const db = await getDb();
	const docs = await db.collection(COL).find().toArray();
	if (docs === null) res.end();
	else {
		res.json(docs);
	}
};

//Handler function for retrieving one reservation by its ID from the database
export const getReservationDetail = async (req, res) => {
	const db = await getDb();
	const doc = await db
		.collection(COL)
		.find({ _id: new ObjectId(req.params.reservationId) })
		.toArray();
	if (doc === null) res.end();
	else {
		res.json(doc);
	}
};

// Handler function for adding a new reservation to the database
export const addReservation = async (req, res) => {
	const db = await getDb();
	const docs = await db.collection(COL).insertOne(req.body);
	res.json();
};

// Handler function for deleting a reservation from the database
export const deleteReservation = async (req, res) => {
	const db = await getDb();
	const del = db
		.collection(COL)
		.findOneAndDelete({ _id: new ObjectId(req.body.id) });
	res.end();
};
