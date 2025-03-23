import cors from "cors";
import dotenv from "dotenv";
import express, {Request, Response} from "express";
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
dotenv.config();
const PORT = process.env.PORT || 7002;

const app = express();

const frontendUrl = process.env.FRONTEND_URL || "http://localhost:3000";

const corsOptions = {
    origin: frontendUrl,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(bodyParser.json());

import Art from "./models/arts";

app.get("/api/arts", async (req, res) => {
    console.log("TRYING TO FETCH arts");
    try {
        const arts = await Art.find();
        res.status(200).json({
            arts: arts.map((art) => ({
                id: art._id,
                artName: art.artName
            }))
        });
        console.log("FETCHED ARTS", arts);
    } catch (err: unknown) {
        if (err instanceof Error) {
            console.error("ERROR FETCHING ARTS");
            console.error(err.message);
        } else {
            console.error("An unknown error occurred");
        }
        res.status(500).json({message: "Failed to load arts."});
    }
});

app.get("/api/data", (req: Request, res: Response) => {
    res.json({message: "Hello from backend!"});
});

mongoose
    .connect("mongodb://localhost:27017/arts", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("CONNECTED TO MONGODB");
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })

    .catch((err: unknown) => {
        console.error("FAILED TO CONNECT TO MONGODB");
        console.error(err);
    });
