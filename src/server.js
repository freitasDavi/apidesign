const express = require("express");

const app = express();

app.get("/", (request, response) => {
    console.log('hellow from express');
    response.status(200);
    response.json({ message: "Hello" });
});

module.exports = {
    app
};