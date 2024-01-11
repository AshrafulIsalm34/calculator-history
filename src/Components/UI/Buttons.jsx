import React from 'react';
import PropTypes from 'prop-types'



const Buttons = ({text,onClick,disabled,customStyle}) => {

  const disableStyle={
    backgroundColor:'#666',
    color:'#fff',
    borderRadius:'0.1.rem',
    cursor:'default'
  }

  const style={
    padding:'0.4rem 0.8rem',
    backgroundColor:'#ddd',
    color:'#212121',
    cursor:"pointer",
    borderRadius:'0.10rem',
    border:'none',
    ...customStyle,
    ...(disabled && disableStyle),
  }



   return (
   <button onClick={onClick} disable={disabled} style={style}>{text}</button>
  )
}

Buttons.propTypes ={
  text:PropTypes.string.isRequired,
  onClick:PropTypes.func.isRequired,
  disabled:PropTypes.bool.isRequired,
  customStyle:PropTypes.object.isRequired
}

Buttons.defaultProps={
  customStyle:{},
  disabled:false,
}

export default Buttons