import { useEffect, useState } from "react";
import "./AppCss.css";
import axios from "axios";

function App() {
	let [tasks, setTasks] = useState([]);
	let [newName, setNewName] = useState("");
	let [newDes, setNewDes] = useState("");

	// post task
	let postTask = async (newtask1) => {
		await axios.post("http://localhost:5001/task", newtask1);

		getTask();
	};
	// delete task
	let deleteTask = async (id) => {
		await axios.delete(`http://localhost:5001/task/${id}`);

		getTask();
	};
	// update task
	let updateTask = async (id, task) => {
		await axios.put(`http://localhost:5001/task/${id}`, task);

		getTask();
	};

	let getTask = async () => {
		let tasks1 = await axios.get("http://127.0.0.1:5001/tasks");
		let tasks12 = tasks1.data.taskList;
		setTasks(tasks12);
	};

	useEffect(() => {
		getTask();
	}, []);

	return (
		<div class="container">
			<div class="input-box">
				<input
					class="name-inp"
					placeholder="Name the Task"
					value={newName}
					type="text"
					onChange={(ev) => {
						setNewName(ev.target.value);
					}}
				/>
				<input
					class="des-input"
					value={newDes}
					placeholder="Describe Your Task"
					type="text"
					onChange={(ev) => {
						setNewDes(ev.target.value);
					}}
				/>
				<button
					class="sub-btn"
					onClick={(ev) => {
						let newtask1 = {
							name: newName,
							description: newDes,
						};
						postTask(newtask1);
						setNewDes("");
						setNewName("");
					}}
				>
					submit
				</button>
			</div>

			<div class="card-container">
				{tasks.map((val, ind) => {
					return (
						<Task
							funs={{ deleteTask, updateTask }}
							task={val}
						/>
					);
				})}
			</div>
		</div>
	);
}

function Task({ task, funs }) {
	let [upDes, setUpDes] = useState(task.description);

	return (
		<div class={task.done === false ? "task" : "task task-done"}>
			<div class="name-box">{task.name}</div>

			<div class="inp-box">
				<input
					class="description"
					type="text-card"
					value={upDes}
					onChange={(ev) => {
						setUpDes(ev.target.value);
					}}
				/>
			</div>
			<div class="btn btn-box">
				<button
					class="update"
					onClick={(ev) => {
						funs.updateTask(task._id, { description: upDes });
					}}
				>
					update
				</button>
				<button
					class="delete"
					onClick={(ev) => {
						funs.deleteTask(task._id);
					}}
				>
					delete
				</button>
				<button
					class="done"
					onClick={(ev) => {
						funs.updateTask(task._id, { done: true });
					}}
				>
					Completed
				</button>
			</div>
		</div>
	);
}

export default App;
