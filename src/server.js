const express = require("express");
const app = express();
const port = 1000;
const chalk = require("chalk");

export function run() {
app.get('/', (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
}

export function stop() {

}