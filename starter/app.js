const express = require("express");
const app = express();
const tasks = require("./routers/tasks");
const connectDB = require("./db/connect");
require("dotenv").config();

app.use(express.json());

//routes
app.get("/hello", (req, res) => {
	res.status(200).send("Task Manager App");
});

app.use("/api/v1/tasks", tasks);

const port = 3000;

const start = async () => {
	try {
		await connectDB(process.env.MONGO_URI);
		app.listen(port, () => {
			console.log("server is listening to port " + port);
		});
	} catch (error) {
		console.log(error);
	}
};

start();
