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
		if(value>0){
			setClicksPerSecond(value)
		}
		if (value > 0 && e.key === "Enter") {
			setDelay(1000 / clicksPerSecond);
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
	const select = ({ target }) => target.select();

	const [counter, setCounter] = useState(0);
	const [step, setStep] = useState(1);
	const [prevStep, setPrevStep] = useState(step);
	const [isIncrement, setIsIncrement] = useState(true);
	const [isAutoClick, setIsAutoClick] = useState(false);
	const [delay, setDelay] = useState(1000);
	const [clicksPerSecond, setClicksPerSecond] = useState(1)
	const [caption, setCaption] = useState("Increment");

	return (
		<>
			<div className={style.container}>
				<div>Counter:{counter}</div>
				<Step step={step} setStep={setStep} />
				<label>
					Количество нажатий в секунду (Press Enter)
					<input type="number" min="1"  onFocus={select} onKeyUp={changeDelay} onChange={changeDelay} value={clicksPerSecond}/>
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
