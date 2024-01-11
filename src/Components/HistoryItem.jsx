import React, { useState } from 'react';
import PropTypes from 'prop-types'
import Buttons from './UI/Buttons';

const HistoryItem = ({historyItem,disabled,handleRestore}) => {
    const [show,setShow] =useState(false)

    const handleToggle=()=>{
        setShow(!show);
    }
  return (

    <li key={historyItem.id} style={{listStyle:'decimal'}}> 
        <div style={{display:'flex',gap:'1rem',alignItems:'center',justifyContent:'space-between'}}>
            <p>Operation: {historyItem.inputs.a} {historyItem.operation} {historyItem.inputs.b}    ****Toggle show button and see the Result! </p> 
            <div style={{marginRight:'0'}}>
                <Buttons text={show ? 'Hide' : 'Show'} onClick={handleToggle} />
            </div>
        </div>   
        
        
        {show && <>
        <strong>Result = {historyItem.result}</strong><br/>
        <small>{historyItem.date.toLocaleString()}</small>
        <br />

        <Buttons text='Restore' onClick={()=>handleRestore(historyItem)} disabled={disabled} />
        </>}
    </li>

  )
}

HistoryItem.propTypes={
    historyItem:PropTypes.shape({
        id:PropTypes.number.isRequired,
        inputs:PropTypes.shape({
            a:PropTypes.number.isRequired,
            b:PropTypes.number.isRequired
          }).isRequired,
        operation:PropTypes.string.isRequired,
        result:PropTypes.number.isRequired,
        date:PropTypes.object.isRequired,
    }),
    disabled:PropTypes.bool.isRequired,
    handleRestore:PropTypes.func.isRequired,
}

HistoryItem.defaultProps={
    disabled:false
}

export default HistoryItem;