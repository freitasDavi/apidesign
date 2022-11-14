import express from "express";
import router from "./router";
import morgan from "morgan";
import { protect } from "./modules/auth";
import { createNewUser, signIn } from "./handlers/user";

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
// Those routes don't need tokens, that's why they aren't in the common router file
app.post('/user', createNewUser);
app.post('/signin', signIn);

export default app;