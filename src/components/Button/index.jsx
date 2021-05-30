import React from 'react';
import style from './Button.module.sass';
function Button(props){
  const {caption, handler, className} = props;
  return (
    <>
      <button className={`style.${className}`} onClick={handler}>{caption}</button>
    </>
  )
}
export default Button;