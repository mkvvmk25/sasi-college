import { useState } from "react";

function App() {
	let [flags, setFlags] = useState([]);
	let s = "in";

	let getflagUrl = () => {
		fetch("https://restcountries.com/v3.1/alpha/in")
			.then((full) => full.json())
			.then((full) => {
				setFlags([...flags, full[0].flags.png]);
			});
	};

	// https://bit.ly/AA-201224

	return (
		<div>
			<div>
				<input value={s}></input>
				<button onClick={getflagUrl}>get flag</button>
			</div>

			<div>
				{flags.map((val, ind, arr) => (
					<ImgComp url={val} />
				))}
			</div>
		</div>
	);
}

let d = [1, 2, 3];
d.push(5);
d.push(4);
let g = [...d, 5, 4];

function ImgComp(props) {
	return (
		<img
			width={"100" + "px"}
			height={"100" + "px"}
			src={props.url}
			alt={"..."}
		/>
	);
}

export default App;
// module.exports = { App, Cpp };

/* 

{[
					<ImgComp url="https://picsum.photos/200" />,
					<ImgComp url="https://picsum.photos/200" />,
					<ImgComp url="https://picsum.photos/200" />,
				]}

*/
