import { useEffect, useState } from "react";
import "./style.css";
import axios from "axios";

function App() {
	let [task, setTask] = useState([]);
	let [name, setName] = useState("");
	let [des, setDes] = useState("");

	let postTask = async (body) => {
		let url = `http://127.0.0.1:9006/todo/post`;
		let obj = await axios.post(url, body);

		getTasks();
	};
	let updateTask = async (id, body) => {
		let url = `http://127.0.0.1:9006/todo/${id}`;
		let obj = await axios.put(url, body);

		getTasks();
	};
	let delTask = async (id) => {
		let url = `http://127.0.0.1:9006/todo/${id}`;
		let obj = await axios.delete(url);

		getTasks();
	};

	let getTasks = async () => {
		let url = `http://127.0.0.1:9006/todo/todos`;
		let obj = await axios.get(url);
		console.log(obj.data);

		setTask(obj.data.todos);
	};

	useEffect(() => {
		getTasks();
	}, []);

	return (
		<div class="container">
			<div class="input-box">
				<input
					class="name-inp"
					placeholder="Name the Task"
					value={name}
					type="text"
					onChange={(ev) => {
						// ev.target.value
						setName(ev.target.value);
					}}
				/>
				<input
					class="des-input"
					value={des}
					placeholder="Describe Your Task"
					type="text"
					onChange={(ev) => {
						// ev.target.value
						setDes(ev.target.value);
					}}
				/>
				<button
					class="sub-btn"
					onClick={(ev) => {
						let body = { name: name, des: des };
						postTask(body);
					}}
				>
					submit
				</button>
			</div>

			<div class="card-container">
				{task.map((ele, ind) => {
					return (
						<Task
							todo={ele}
							up={updateTask}
							del={delTask}
						/>
					);
				})}
			</div>
		</div>
	);
}

// props.todo.name;

function Task({ todo, up, del }) {
	// todo._id
	let [des, setdes] = useState(todo.des);
	return (
		<div class="task">
			<div class="name-box">{todo.name}</div>

			<div class="inp-box">
				<input
					class="description"
					type="text-card"
					value={des}
					onChange={(ev) => {
						setdes(ev.target.value);
					}}
				/>
			</div>
			<div class="btn btn-box">
				<button
					class="update"
					onClick={(ev) => {
						let body = { des: des };
						up(todo._id, body);
					}}
				>
					update
				</button>
				<button
					class="delete"
					onClick={(ev) => {
						del(todo._id);
					}}
				>
					delete
				</button>
				<button class="done">Completed</button>
			</div>
		</div>
	);
}

export default App;

/* 

box = abc 

let p = ""



*/
