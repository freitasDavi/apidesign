import express from "express";
import router from "./router";
import morgan from "morgan";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'));

app.use((req, res, next) => {
    res.status(401);
    res.send("Nope")
});

app.get("/", (request, response) => {
    console.log('hellow from express');
    response.status(200);
    response.json({ message: "Hello" });
});

app.use('/api', router);

export default app;