import React, { useState, useRef, useEffect, useReducer } from 'react';
import './calcCss.css';


const Calculator = () => {

    /* const inputV = useRef(null);

    const [result, setResult] = useState("");
    const [current, setCurrent] = useState("");
    const [conta, setConta] = useState("");
    const [show, setShow] = useState("0");

    function claudio(O, V) {
        setConta((`${conta}${V}${O}`));
        inputV.current.value = "";
        setShow(show + O)
    }
    function renato() {
        setResult(eval(conta + current))
    }
    function clean() {
        inputV.current.value = "";
        setConta("")
        setShow("")
        setResult("")
    }
    function handleChange(e) {
        setCurrent(e.target.value)
    }


    useEffect(() => setShow(conta + current), [current])

    return (
        <>
            <div className="calc">
                <input ref={inputV} onChange={(e) => handleChange(e)} className="show" type="text" />

                <div className="calcKeys">
                    <button onClick={(e) => claudio(e.target.innerHTML, inputV.current.value)}>/</button>
                    <button onClick={(e) => claudio(e.target.innerHTML, inputV.current.value)}>+</button>
                    <button onClick={(e) => claudio(e.target.innerHTML, inputV.current.value)} >*</button>
                    <button onClick={(e) => claudio(e.target.innerHTML, inputV.current.value)} >-</button>
                    <button onClick={() => clean()} >clear</button>
                    <button onClick={() => renato()} >=</button>
                </div>
                <span className="result">{show}</span>
                <span className="result">{result}</span>
            </div>
        </>
    )*/


    const inputElement = useRef(null);
    const initialState = { count: 0 };
    const [show, setShow] = useState("")
    const [operation, setOperation] = useState("");
    const [current, setCurrent] = useState("");
  const[history,setHistory] = useState("");
    function reducer(state, action) {

        let obj = {}
        switch (action.type) {
            case 'increment':
                setShow(`${show === "" ? "" : show + "+"}`)
                obj = { count: state.count + parseInt(inputElement.current.value) }
                break;
            case 'decrement':
                setShow(`${show === "" ? "" : show + "-"}`)
                obj = { count: state.count - parseInt(inputElement.current.value) }
                break;
            case 'multiply':
                setShow(`${show === "" ? "" : show + "*"}`)
                obj = { count: state.count * parseInt(inputElement.current.value) }
                break;
            case 'divide':
                setShow(`${show === "" ? "" : show + "/"}`)
                if(state.count === 0) {
                 return {count: state.count}
                }
                obj = { count: state.count / parseInt(inputElement.current.value) }
                break;
            case 'clean':
                setHistory(show + `= ${state.count}`)
                setShow("")
                setOperation("")
                inputElement.current.value = ""
                return { count: 0 };
            default:
                throw new Error();
        }

        return obj;
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        setShow(show + current + operation)
        inputElement.current.value = ""
    }, [state.count])

 
    return (
        <>
        <style jsx></style>
            <div className="calc">
                <input ref={inputElement} onChange={(e) => setCurrent(e.target.value)} className="show" type="text" />

                <div className="calcKeys">
                    <button onClick={() => dispatch({ type: 'divide' })}>/</button>
                    <button onClick={() => dispatch({ type: 'increment' })}>+</button>
                    <button onClick={() => dispatch({ type: 'multiply' })}  >*</button>
                    <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
                    <button onClick={() => dispatch({ type: 'clean' })} >clear</button>
                </div>
                <span className="result">{show}</span>
                <span className="result">{state.count}</span>
                <span className="result">{history}</span>
            </div>
        </>
    )
}

export default Calculator;