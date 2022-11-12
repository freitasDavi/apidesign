import express from "express";

const app = express();

app.get("/", (request, response) => {
    console.log('hellow from express');
    response.status(200);
    response.json({ message: "Hello" });
});

export default app;