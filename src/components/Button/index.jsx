import React from "react";
import PropTypes from 'prop-types';
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

Button.defaultProps ={
	caption: "Increment",
	handler: () =>{}
}

Button.propType = {
	caption: PropTypes.string.isRequired,
	handler: PropTypes.func.isRequired,
}

export default Button;
