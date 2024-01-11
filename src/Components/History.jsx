import React from 'react'
import HistoryItem from './HistoryItem'
import PropTypes from 'prop-types'

const History = ({histories,restoreHistory,handleRestore}) => {

  return (
    <div style={{backgroundColor:'#efefef',padding:'1rem',marginTop:'1rem'}}>
        <h1 style={{textAlign:'center'}}>History</h1>

        {histories.length === 0 ? (<p>There is no History</p>)
        :(
        <ul style={{margin:'0',paddingLeft:'1rem'}}> 
            {histories.map((historyItem)=><HistoryItem key={historyItem.id} disabled={restoreHistory===historyItem.id} historyItem={historyItem} handleRestore={handleRestore}/>)}
        </ul> 
        )} 
    </div>
  )
}

History.propTypes={
    histories:PropTypes.arrayOf(
        PropTypes.shape({
            id:PropTypes.number.isRequired,
            inputs:PropTypes.shape({
                a:PropTypes.number.isRequired,
                b:PropTypes.number.isRequired
              }).isRequired,
            operation:PropTypes.string.isRequired,
            result:PropTypes.number.isRequired,
            date:PropTypes.object.isRequired,
        })
    ),
    restoreHistory:PropTypes.number.isRequired,
    handleRestore:PropTypes.func.isRequired
}

export default History