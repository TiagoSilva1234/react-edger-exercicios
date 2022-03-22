import React, { useState, useEffect, useRef } from 'react';
import { StyledContainer, StyledClick, StyledList, StyledImg } from '../styles/dropdown.styled.js';

const Dropdown = ({ text, method }) => {

    const [show, setShow] = useState(0);
    const [seta, setSeta] = useState(1);

    const buttonC = useRef();

    useEffect(() => {
        buttonC.current.innerHTML = text;
    })

    function doStuff(e) {
        setSeta(seta == -1 ? 1 : -1);
        setShow(show == 0 ? 1 : 0);

        method(e.target.innerHTML)
    }

    return (
        <StyledContainer >
            <StyledClick ref={buttonC} onClick={(e) => doStuff(e)} ></StyledClick>
            <StyledList size={show}>
                <button onClick={(e) => doStuff(e)}>1</button>
                <button onClick={(e) => doStuff(e)}>2</button>
                <button onClick={(e) => doStuff(e)}>3</button>
            </StyledList>
            <StyledImg idk={seta} src="https://icon-library.com/images/icon-arrow-down/icon-arrow-down-9.jpg" ></StyledImg>
        </StyledContainer>
    )
}
export default Dropdown;