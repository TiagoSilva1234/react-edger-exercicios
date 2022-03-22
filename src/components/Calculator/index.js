import React, { useState, useRef } from 'react';
import './calcCss.css';


const Calculator = () => {
    const inputV = useRef(null);
    const [result, setResult] = useState(0);
   const[current,setCurrent] = useState("");

   function claudio (O,V){
       setCurrent(V+O);
       
   }
   function renato(){
       setResult(eval(current));
   }
    return (
        <>
            <div className="calc">
                <input  ref={inputV} className="show" type="text">
                </input>
                <div className="calcKeys">
                    <button onClick={(e)=> claudio(e.target.innerHTML, inputV.current.value)}>/</button>
                    <button>+</button>
                    <button>x</button>
                    <button>-</button>
                    <button>.</button>
                    <button onClick ={()=> renato()}>=</button>
                </div>
                <span className="result">{result}</span>
            </div>

        </>
    )

}

export default Calculator;