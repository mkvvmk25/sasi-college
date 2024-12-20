/* 
props = {
"col":"red",
"fz":"8px",
num:5
  }

*/

function Comp1(props) {
	return (
		<p
			className="col"
			style={{
				"background-color": props.col,
				fontSize: props.fz,
				fontFamily: "sans-serif",
			}}
		>
			hey
			<Comp11 fz={props.num + 10} />
		</p>
	);
}

function Comp11(props) {
	return (
		<p
			style={{
				fontSize: `${props.fz}px`,
			}}
		>
			{`${props.fz}`}
		</p>
	);
}

export default Comp1;
