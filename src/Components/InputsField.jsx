import React from 'react';
import Inputs from './UI/Inputs';
import PropTypes from 'prop-types'

const InputsField = ({inputs,handleInputField}) => {
  return <div style={{width:'100%', backgroundColor:'#efefef',padding:'0.5rem',boxSizing:'border-box', textAlign:'center'}}>
    <h2 style={{fontFamily:'Arial',margin:'0',marginBottom:'1rem'}}>Input</h2>
    <div style={{display:'flex',gap:'1rem', justifyContent:'space-between'}}>
      <Inputs value={inputs.a} onChange={handleInputField} name='a'/>
      <Inputs value={inputs.b} onChange={handleInputField} name='b'/>
    </div>
    
</div>
}

InputsField.propTypes={
  inputs:PropTypes.shape({
    a:PropTypes.number.isRequired,
    b:PropTypes.number.isRequired
  }).isRequired,
  handleInputField:PropTypes.func.isRequired,
}

export default InputsField;