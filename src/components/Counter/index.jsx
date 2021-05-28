import React, { useState } from "react";
import Step from "../Step";

function Counter(props) {
	const [counter, setCounter] = useState(0);
	const [step, setStep] = useState(1);

	return (
		<>
			<div>Counter:{counter}</div>
      <Step step={step} setStep={setStep}/>
			<button onClick={() => setCounter(counter + step)}>ChangeCounter</button>
		</>
	);
}
export default Counter;
