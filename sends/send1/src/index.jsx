import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import Cards from "./Cards";

const root = ReactDOM.createRoot(document.getElementById("root"));

// Data Array
let cardsArr = [
	{
		name: "pic1",
		img: "https://picsum.photos/200",
	},
	{
		name: "pic2",
		img: "https://picsum.photos/200",
	},
	{
		name: "pic3",
		img: "https://picsum.photos/200",
	},
	{
		name: "pic4",
		img: "https://picsum.photos/200",
	},
];

function App() {
	return (
		<div>
			<Heading
				color={"red"}
				name={"Hello"}
			/>
			<Greeting msg={1 < 0 ? "Good Morning" : "Good Night"} />
			<Cards cardsArr={cardsArr} />
			<Footer />
		</div>
	);
}

function Heading(props) {
	return <h1>{`${props.name} ${props.color}`}</h1>;
}

function Greeting({ msg }) {
	return (
		<h2>
			{msg}
			<div>Additional content here</div>
		</h2>
	);
}

function Footer() {
	return <footer>Footer content goes here</footer>;
}

root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
