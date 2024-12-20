import { useState } from "react";

function App() {
	// let val = 50;
	let [val, setVal] = useState(100);

	// Hooks

	// ince
	let inc = () => {
		setVal(val + 1);
	};
	let dec = () => {
		setVal(val - 1);
	};
	let reset = () => {
		setVal(0);
	};
	return (
		<div>
			<h1
				style={{
					color: `${val % 2 == 0 ? "red" : "blue"}`,
				}}
			>
				{val}
				<span>{`---> ${val % 2 == 0 ? "even" : "odd"}`}</span>
			</h1>
			<button onClick={inc}>inc</button>
			<button onClick={dec}>dec</button>
			<button onClick={reset}>reset</button>
		</div>
	);
}

export default App;
// module.exports = { App, Cpp };
