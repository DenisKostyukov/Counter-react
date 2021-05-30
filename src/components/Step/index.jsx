import React, { useState } from "react";

function Step(props) {
	const { step, setStep } = props;
	const inputHandler = ({ target: { value } }) => {
		if (value <= 0 || value > 100) value = 1;
		setStep(Number(value));
	};
	return (
		<>
			<div>Step: {step}</div>
			<input
				type="number"
				min="1"
				defaultValue="1"
				onChange={inputHandler}
				onKeyUp={inputHandler}
			/>
		</>
	);
}

export default Step;
