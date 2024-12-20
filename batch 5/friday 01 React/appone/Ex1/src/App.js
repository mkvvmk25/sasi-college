import Comp1 from "./Comp1";

function App() {
	return (
		<h1>
			hello
			<Comp1
				col="red"
				fz="8px"
				num={5}
			/>
			<Comp1
				col="blue"
				fz="8px"
				num={100}
			/>
		</h1>
	);
}

export default App;
// module.exports = { App, Cpp };
