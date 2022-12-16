const Task = require("../models/Tasks");

const getAllTasks = (req, res) => {
	res.status(200).send("all tasks");
};

const getTask = (req, res) => {
	res.status(200).send("single task");
};

const createTask = async (req, res) => {
	const task = await Task.create(req.body);
	res.status(201).json({ task });
};

const updateTask = (req, res) => {
	res.status(200).send("edit this task");
};

const deleteTask = (req, res) => {
	res.status(200).send("delete this task");
};

module.exports = {
	getAllTasks,
	getTask,
	createTask,
	updateTask,
	deleteTask,
};
