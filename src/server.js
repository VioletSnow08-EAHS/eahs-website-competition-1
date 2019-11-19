const express = require("express");
const app = express();
const port = 1000;
const chalk = require("chalk");
const path = require("path");
const PORT = 3005;
app.use(express.static(path.join(__dirname, '../build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});


app.listen(PORT, function (err) {
	if (err) return console.log(err);
	console.log(chalk.blue('Project BlueSquare Website(https://pbs.vinniehat.tk) BACKEND, opened up at Port: ' + PORT));
});