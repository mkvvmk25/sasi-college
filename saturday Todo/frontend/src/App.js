import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
	let [todos, settodos] = useState([]);
	// let [newTask, setNewTask] = useState({ name: "", description: "" });
	let [newName, setNewName] = useState("");
	let [newDes, setNewDes] = useState("");

	// post
	let postTask = async (task) => {
		let todos = await axios.post("http://localhost:7001/api/todo", task);
		let task1 = todos.data; // arrays of tasks
		getTasks();
		return task1.status;
	};
	// delete
	let deleteTask = async (id) => {
		let todos = await axios.delete(`http://localhost:7001/api/todo/${id}`);
		let task1 = todos.data; // arrays of tasks
		getTasks();
		return task1.status;
	};
	let updateTask = async (id, task) => {
		/* 
    
      task: {
      done:"asjhdgagsdvh"
      }
    */
		let todos = await axios.put(
			`http://localhost:7001/api/todo/${id}`,
			task
		);
		let task1 = todos.data; // arrays of tasks
		getTasks();
		return task1.status;
	};

	let getTasks = async () => {
		let todos = await axios.get("http://localhost:7001/api/todo");
		let tasks = todos.data.data; // arrays of tasks
		settodos(tasks);
	};
	useEffect(() => {
		getTasks();
	}, []);
	// getTasks();

	return (
		<div className="container">
			<div className="input-box">
				<input
					className="name-inp"
					placeholder="Name the Task"
					value={newName}
					type="text"
					onChange={(ev) => setNewName(ev.target.value)}
				/>
				<input
					className="des-input"
					value={newDes}
					placeholder="Describe Your Task"
					type="text"
					onChange={(ev) => setNewDes(ev.target.value)}
				/>
				<button
					onClick={(ev) => {
						postTask({ name: newName, description: newDes });
						setNewName("");
						setNewDes("");
					}}
					className="sub-btn"
				>
					submit
				</button>
			</div>

			<div className="card-container">
				{todos.length > 0 ? (
					todos.map((task, ind) => (
						<Task
							tk={task}
							key={task._id}
							funs={{ deleteTask, updateTask }}
						/>
					))
				) : (
					<h1>no task</h1>
				)}
			</div>
		</div>
	);
}

function Task({ tk, funs }) {
	let [upDes, setUpDes] = useState(tk.description);

	return (
		<div className={tk.done == true ? "task task-done" : "task"}>
			<div className="name-box">{tk.name}</div>

			<div className="inp-box">
				<input
					className="description"
					type="text-card"
					value={upDes}
					onChange={(ev) => setUpDes(ev.target.value)}
				/>
			</div>
			<div className="btn btn-box">
				<button
					onClick={(ev) =>
						funs.updateTask(tk._id, { description: upDes })
					}
					className="update"
				>
					update
				</button>
				<button
					onClick={(ev) => funs.deleteTask(tk._id)}
					className="delete"
				>
					delete
				</button>
				<button
					onClick={(ev) => funs.updateTask(tk._id, { done: true })}
					className="done"
				>
					Completed
				</button>
			</div>
		</div>
	);
}

export default App;
