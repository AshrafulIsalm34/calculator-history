import React from 'react';
import Buttons from './UI/Buttons';
import {v4 as uuid} from 'uuid';
import PropTypes from 'prop-types'



const Operations = ({handleOperation,handleClear}) => {

    const operations=[
        {
            id:uuid(),
            text:'+',
            onClick:()=>handleOperation('+')
        },
        {
            id:uuid(),
            text:'-',
            onClick:()=>handleOperation('-')
        },
        {
            id:uuid(),
            text:'*',
            onClick:()=>handleOperation('*')
        },
        {
            id:uuid(),
            text:'/',
            onClick:()=>handleOperation('/')
        },
        {
            id:uuid(),
            text:'%',
            onClick:()=>handleOperation('%')
        },
        {
            id:uuid(),
            text:'**',
            onClick:()=>handleOperation('**')
        },
        {
            id:uuid(),
            text:'Clear',
            onClick:handleClear
        }
    ]


  return (
    <div style={{backgroundColor:'#efefef',padding:'0.5rem', marginTop:'1rem'}}>
        <h2 style={{textAlign:'center'}}>Operation</h2>
        <div style={{display:'flex',gap:'1rem',width:'100%'}}>
        {operations.map((item)=><Buttons text={item.text} onClick={item.onClick} key={item.id}/>)}
        </div>
    </div>
  )
}

Operations.propTypes={
    handleOperation:PropTypes.func.isRequired,
    handleClear:PropTypes.func.isRequired,
}

export default Operations