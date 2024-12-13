function Cards({ cardsArr }) {
	return (
		<div>
			{/*
				
				[
				<Card
					key={0}
					obj={cardsArr[0]}
				/>,
				<Card
					key={1}
					obj={cardsArr[1]}
				/>,
				<Card
					key={0}
					obj={cardsArr[2]}
				/>,
				<Card
					key={0}
					obj={cardsArr[3]}
				/>,
				]
				*/}

			{cardsArr.map((val, index, arr) => {
				return (
					<Card
						key={index}
						obj={val}
					/>
				);
			})}
		</div>
	);
}

function Card({ obj }) {
	return (
		<img
			src={obj.img}
			alt={obj.name}
		/>
	);
}

export default Cards;
