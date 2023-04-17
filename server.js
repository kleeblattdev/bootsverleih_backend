import express from "express";
import cors from "cors";
import multer from "multer";

import "./config/config.js";

const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/api/v1/boats");
app.delete("/api/v1/boats");

app.get("/api/v1/reservation");
app.delete("/api/v1/reservation");

app.listen(PORT, () => console.log("Server listening on port", PORT));
