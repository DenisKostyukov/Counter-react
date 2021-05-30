import React, { useState } from "react";
import Button from '../Button'
import Step from "../Step";

function Counter(props) {
	const [counter, setCounter] = useState(0);
	const [step, setStep] = useState(1);
	const [isIncrement, setIsIncrement] = useState(true);
	const increment = () =>{
		setCounter(counter+step);
	}
	const decrement = () =>{
		setCounter(counter-step);
	}
	const changeMode = () =>{
		setIsIncrement(!isIncrement)
	}
	const currentMode = () => isIncrement ? increment() : decrement();

	return (
		<>
			<div>Counter:{counter}</div>
      <Step step={step} setStep={setStep}/>
			<p>Текущая операция: {isIncrement ? "Increment" : "Decrement"}</p>
			<Button handler={changeMode} caption={"Change mode"} />
			<Button handler={currentMode} caption ={"Increment"} />
			<Button caption="Auto click"/>
		</>
	);
}
export default Counter;
