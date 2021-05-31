import React, { useState } from "react";
import PropTypes from "prop-types";
import style from "./Step.module.sass";
function Step(props) {
	const { step, setStep } = props;
	const inputHandler = ({ target: { value } }) => {
		if (value <= 0 || value > 100) {
			setStep(1);
			return;
		}
		setStep(Number(value));
	};
	const select = ({target}) => target.select();
	return (
		<>
			<div>Step: {step}</div>
			<label>
				Шаг счетчика
				<input
					type="number"
					min="1"
					onFocus={select}
					onChange={inputHandler}
					onKeyUp={inputHandler}
					value={step}
				/>
			</label>
		</>
	);
}
Step.defaultProps = {
	step: 1,
	setStep: () => {},
};

Step.propType = {
	step: PropTypes.number,
	setStep: PropTypes.func.isRequired,
};

export default Step;
