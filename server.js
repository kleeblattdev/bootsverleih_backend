//import dependencies
import express from "express";
import cors from "cors";
import multer from "multer";

import "./config/config.js";
import {
	addBoat,
	addReservationEmbedded,
	deleteBoat,
	getBoatDetail,
	getBoats,
} from "./controller/boatsController.js";
import {
	addReservation,
	deleteReservation,
	getReservationDetail,
	getReservations,
} from "./controller/reservationController.js";

const app = express();

//setting the server port to use
const PORT = process.env.PORT || 3000;

const upload = multer();

//applying CORS and JSON middleware
app.use(cors());
app.use(express.json());

//BOATS ROUTES
//Handling GET requests for all boats
app.get("/api/v1/boats", getBoats);
//Handling GET Request for a single boat
app.get("/api/v1/:boatId", getBoatDetail);
//Handling POST request for adding a new boat
app.post("/api/v1/boats", upload.none(), addBoat);
//Handling DELETE request for deleting a boat
app.delete("/api/v1/boats", deleteBoat);

//RESERVATION ROUTES
//Handling GET requests for all reservations
app.get("/api/v1/reservation", getReservations);
//Handling GET requests for a single reservation
app.get("/api/v1/:reservationId", getReservationDetail);
//Handling POST request for adding i new reservation
app.post("/api/v1/reservation", upload.none(), addReservation);
//Handling DELETE request for deleting a reservation
app.delete("/api/v1/reservation", deleteReservation);

//Starting the server and listening on the configured port
app.listen(PORT, () => console.log("Server listening on port", PORT));
