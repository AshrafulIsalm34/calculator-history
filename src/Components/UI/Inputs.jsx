import React from 'react';
import PropTypes from 'prop-types'

const style={
  padding:'0.5rem',
  borderRadius:'0.1rem',
  border: '1px solid gray',
  background:'#fff',
  outline:'none',
  width:'100%'
}

const Inputs = ({value,onChange,name}) => {
  return <input type="number" style={style} value={value} onChange={onChange} name={name}/>
}


Inputs.propTypes ={
  value:PropTypes.number.isRequired,
  name:PropTypes.string.isRequired,
  onChange:PropTypes.func.isRequired,
}

export default Inputs;