import React, { useState } from "react";

function Step(props) {
	const { step, setStep } = props;
	const inputHandler = ({ target: { value } }) => {
		if (value <= 0) return;
		setStep(Number(value));
	};
	return (
		<>
			<div>Step: {step}</div>
			<input type="number" min="1" defaultValue="1" onChange={inputHandler} onKeyUp={inputHandler} />
		</>
	);
}

export default Step;
