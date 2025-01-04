// react hooks

import axios from "axios";

import { useEffect, useState } from "react";
import "./style.css";

function App() {
	let [name, setName] = useState("");
	let [des, setDes] = useState("");

	let [taskList, setTaskList] = useState([]);

	let getTasks = async () => {
		let r = await axios.get("http://127.0.0.1:8001/gettask");
		console.log(r.data.posted);

		setTaskList(r.data.posted);
	};

	let postTasks = async (task) => {
		let r = await axios.post("http://127.0.0.1:8001/posttask", task);

		getTasks();
	};
	// getTasks();

	useEffect(() => {
		getTasks();
	}, []);

	// getTasks();

	return (
		<div class="container">
			<div class="input-box">
				<input
					class="name-inp"
					placeholder="Name the Task"
					value={name}
					onChange={(ev) => setName(ev.target.value)}
					type="text"
				/>
				<input
					class="des-input"
					value={des}
					onChange={(ev) => setDes(ev.target.value)}
					placeholder="Describe Your Task"
					type="text"
				/>
				<button
					class="sub-btn"
					onClick={(ev) => {
						postTasks({ name, des });
					}}
				>
					submit
				</button>
			</div>

			<div class="card-container">
				{taskList.map((val, ind) => {
					return <Task task={val} />;
				})}
			</div>
		</div>
	);
}

function Task({ task }) {
	return (
		<div class="task">
			<div class="name-box">{task.name}</div>

			<div class="inp-box">
				<input
					class="description"
					type="text-card"
					value={task.des}
				/>
			</div>
			<div class="btn btn-box">
				<button class="update">update</button>
				<button class="delete">delete</button>
				<button class="done">Completed</button>
			</div>
		</div>
	);
}

export default App;
