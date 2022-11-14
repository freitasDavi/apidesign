import express from "express";
import router from "./router";
import morgan from "morgan";
import { protect } from "./modules/auth";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'));

app.get("/", (request, response) => {
    console.log('hellow from express');
    response.status(200);
    response.json({ message: "Hello" });
});

app.use('/api', protect, router);

export default app;