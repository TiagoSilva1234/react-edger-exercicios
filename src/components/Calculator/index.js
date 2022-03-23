import React, { useState, useRef , useEffect } from 'react';
import './calcCss.css';


const Calculator = () => {
    const inputV = useRef(null);
    
    const [result, setResult] = useState(0);
   const[current,setCurrent] = useState();

   function claudio (O,V){
       setCurrent(current + V + O);
       console.log(current);
       inputV.current.value = "";
   }
   function renato(){
    
       setResult(eval(current))
   }

    return (
        <>
            <div className="calc">
                <input ref={inputV} onChange={ (e)=> setCurrent(e.target.value)} className="show" type="text"/>
            
                <div className="calcKeys">
                    <button onClick={(e)=> claudio(e.target.innerHTML, inputV.current.value)}>/</button>
                    <button>+</button>
                    <button>x</button>
                    <button>-</button>
                    <button onClick={()=>inputV.current.value=""} >clear</button>
                    <button onClick ={()=> renato()} >=</button>
                </div>
                <span className="result">{result}</span>
            </div>

        </>
    )

}

export default Calculator;