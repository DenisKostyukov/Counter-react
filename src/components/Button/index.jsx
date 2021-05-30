import React from "react";
import style from "./Button.module.sass";
function Button(props) {
	const { caption, handler } = props;
	return (
		<>
			<button className={style.button} onClick={handler}>
				{caption}
			</button>
		</>
	);
}
export default Button;
