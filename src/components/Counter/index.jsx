import React, { useState, useEffect } from "react";
import Button from "../Button";
import Step from "../Step";
import style from "./Counter.module.sass";

function Counter(props) {
	const increment = () => setCounter(counter + step);

	const decrement = () => setCounter(counter - step);

	const changeMode = () => {
		setIsIncrement(!isIncrement);
		isIncrement ? setCaption("Decrement") : setCaption("Increment");
	};

	const currentMode = () => (isIncrement ? increment() : decrement());

	const autoClick = () => setIsAutoClick(!isAutoClick);

	const changeDelay = (e) => {
		const {
			target: { value },
		} = e;
		const regexp = /^[1-9]\d*$/;
		if (regexp.test(value) && e.key === "Enter") {
			setDelay(value * 1000);
		}
	};

	useEffect(() => {
		let timeout = null;
		if (prevStep !== step) {
			setIsAutoClick(false);
			setPrevStep(step);
		}
		if (isAutoClick) {
			timeout = setTimeout(currentMode, delay);
		} else clearTimeout(timeout);
	});

	const [counter, setCounter] = useState(0);
	const [step, setStep] = useState(1);
	const [prevStep, setPrevStep] = useState(step);
	const [isIncrement, setIsIncrement] = useState(true);
	const [isAutoClick, setIsAutoClick] = useState(false);
	const [delay, setDelay] = useState(1000);
	const [caption, setCaption] = useState("Increment");

	return (
		<>
			<div className={style.container}>
				<div>Counter:{counter}</div>
				<Step step={step} setStep={setStep} />
				<label>
					Задержка
					<input type="number" onKeyUp={changeDelay} />
				</label>
				<p>Auto click mode: {isAutoClick ? "Enabled" : "Disabled"}</p>
				<div className={style.controls}>
					<Button handler={changeMode} caption={"Change mode"} />
					<Button handler={currentMode} caption={caption} />
					<Button handler={autoClick} caption="Auto click" />
				</div>
			</div>
		</>
	);
}
export default Counter;
