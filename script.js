import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();

app.get("/" ,(req, res) => {
    res.sendFile(__dirname + "/public/homepage.html");
});

app.get("/rap", (req, res) => {
    res.sendFile(__dirname + "/public/rap.html");
});

app.get("/pop", (req, res) => {
    res.sendFile(__dirname + "/public/pop.html");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});