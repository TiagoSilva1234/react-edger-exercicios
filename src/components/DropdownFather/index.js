import React, { useState } from "react";
import { StyledDropdownFather } from "../styles/dropdown.styled";
import Dropdown from '../Dropdown/index';
import Toptext from '../Toptext/index';



const DropdownFather = () => {
    const [value, setValue] = useState("arroz");

    return (
        <StyledDropdownFather>
            <Toptext text={value} method={setValue} />
            <Dropdown text={value} method={setValue} />
        </StyledDropdownFather>
    )
}

export default DropdownFather;