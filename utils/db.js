/**
 * This module exports a function named `getDb` that returns a promise
 * that resolves to a MongoDB database object. The module uses the MongoDB
 * driver for Node.js to establish a connection to a MongoDB instance and
 * retrieve a reference to a database.
 */

import { MongoClient } from "mongodb";

// The URI of the MongoDB instance to connect to
const URI = process.env.MONGO_URI;

// The name of the database to retrieve a reference to
const DB = process.env.MONGO_DB;

// Create a new MongoClient object to manage the connection
const client = new MongoClient(URI);

// Store a reference to the database object once it has been retrieved
let db;

/**
 * Returns a promise that resolves to a reference to the MongoDB database
 * specified in the `MONGO_DB` environment variable.
 *
 * If a database reference has already been retrieved, it is returned
 * immediately. Otherwise, a new connection is established to the MongoDB
 * instance specified in the `MONGO_URI` environment variable, and a reference
 * to the database is retrieved and stored for future use.
 *
 * @returns {Promise<Db>} A promise that resolves to a reference to the MongoDB
 * database specified in the `MONGO_DB` environment variable.
 */
export const getDb = async () => {
	// If a database reference is already available, return it
	if (db) {
		return db;
	}
	// Otherwise, establish a new connection to the MongoDB instance
	else {
		await client.connect();
		db = client.db(DB);
		return db;
	}
};
