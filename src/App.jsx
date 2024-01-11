import React, { useState } from 'react';
import InputsField from './Components/InputsField';
import Operations from './Components/Operations';
import History from './Components/History';




function* generate(){
    let id = 0;
    while(true){
        yield id++;
    }
   }


   const generator = generate();
//    console.log(generator.next().value);

const initialInputState ={
    a:0,
    b:0,
}

const App = () => {
   const [inputSate,setInputState] = useState({...initialInputState});
   const [result,setResult] = useState(0);
   const [histories,setHistories] = useState([]);
   const [restoreHistory,setRestoreHistory] = useState(null)

   const handleInputField=(e)=>{
    setInputState({
        ...inputSate,
        [e.target.name]:parseInt(e.target.value),
        
    })

   }




const handleClear=()=>{
    setInputState({...initialInputState})
    setResult(0)
}

const handleOperation=(operation)=>{

    if(!inputSate.a || !inputSate.b){
        alert('invalid input')
        return
    }

    // eval function
    // eslint-disable-next-line no-eval
    // setResult(eval(`${inputSate.a} ${operation} ${inputSate.b}`))

    // or

    // eslint-disable-next-line no-new-func
    const f =new Function(
        'operation',
        ` return ${inputSate.a} ${operation} ${inputSate.b}
        `
    )
    const result= f(operation);
    setResult(result)



    const historyItem ={
        id:generator.next().value,
        inputs:inputSate,
        operation,
        result,
        date: new Date(),
   }
   setHistories([historyItem, ...histories])
//    console.log(historyItem);


}



const handleRestore=(historyItem)=>{
    setInputState({...historyItem.inputs});
    setResult(historyItem.result)
    setRestoreHistory(historyItem.id)
}





  return (
    <div style={{width:'50%',margin:'0 auto',backgroundColor:'#ddd'}}>
        <h1 style={{textAlign:'center'}}>Result:{result}</h1>
        
        <div>
            <InputsField inputs={inputSate} handleInputField={handleInputField}/>
        </div>

        <div>
            <Operations handleOperation={handleOperation} handleClear={handleClear}/>
        </div>

        <div>
            <History histories={histories} restoreHistory={restoreHistory} handleRestore={handleRestore}/>
        </div>

    </div>
  )
}

export default App;


/**
 * Done Handle user input field
 * Done Handle Operation
 * Done Handle List of Histories
 * Done Render History List
 * Done Restore the History 
 */