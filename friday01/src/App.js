import { useState } from "react";

function App() {
	let [count, setCount] = useState(0);
	function increment() {
		setCount(count + 1);
	}
	let decrement = () => setCount(count - 1);

	let stylebtn = { color: "#23f579", background: "green" };
	return (
		<div>
			<h1>{count}</h1>
			<button
				onClick={(eve) => {
					increment();
				}}
			>
				inc
			</button>
			<button
				onClick={(eve) => {
					decrement();
				}}
			>
				dec
			</button>
			<button
				style={stylebtn}
				onClick={() => setCount(0)}
			>
				reset
			</button>

			
		</div>
	);
}

export default App;
