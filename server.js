import express from "express";
import cors from "cors";
import multer from "multer";

import "./config/config.js";
import {
	addBoat,
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

const PORT = process.env.PORT || 3000;

const upload = multer();

app.use(cors());
app.use(express.json());

//boats route
app.get("/api/v1/boats", getBoats);
app.get("/api/v1/:boatId", getBoatDetail);
app.post("/api/v1/boats", upload.none(), addBoat);
app.delete("/api/v1/boats", deleteBoat);

//resersation route
app.get("/api/v1/reservation", getReservations);
app.get("/api/v1/:reservationId", getReservationDetail);
app.post("/api/v1/reservation", upload.none(), addReservation);
app.delete("/api/v1/reservation", deleteReservation);

app.listen(PORT, () => console.log("Server listening on port", PORT));
