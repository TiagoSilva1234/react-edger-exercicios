import styled from "styled-components";

export const StyledClick = styled.button`
font-size: 1.2em; font-family: futura Md BT;
outline: none;  width:200px;
color:black;
transition: 0.3s;
border: none;
padding: 12px;
background-color: lightgrey;
color:black;
display: flex;
justify-content: flex-start;
position: relative;
margin-top: 30px; 
&:hover{
    background-color: gray; 
}`

export const StyledList = styled.div`
position: absolute;
transform: scaleY(${({ size }) => size});
 transform-origin: top; transition: 0.3s;
z-index: 1;

 button{
    font-size: 1.2em; font-family: futura Md BT;
outline: none; 
 width: 200px;
color:black;
transition: 0.3s;
border: none;
padding: 12px;
background-color: white;
     &:hover{
    background-color: gray; 
    } 
 }
`

export const Styledtext = styled.p`
color: black;
span{
    color:orange;
    font-weight: bold;
}
`



export const StyledContainer = styled.div`
width:200px;
position: relative;
span{
    color:orange;
    font-weight:bold;
    font-size:20px;
}
`

export const StyledImg = styled.img`
position: relative;
width: 36px;height: 36px;
top:-40px;
left: 155px;
transform: scaleY(${(props) => props.idk});
transition: all 0.3s ease;
`


export const StyledDropdownFather = styled.div`
border: 2px solid black;
display: flex;align-items: center;justify-content:center;flex-direction: column;
`

export const StyledButtonBorder = styled.button`
    width:200px;
    height: 40px;
    background-color: transparent;
    border: 0px solid lightgrey;
    border-color: lightgrey;
    transition: all 0.3s ease;

`

export const StyledHr = styled.hr`
  margin-top: 15px;
width: 200px;
margin-left: ${({margLeft})=> margLeft};
transition: all 0.3s ease;
background-color: black;
 height: 4px;
 border: none;
 z-index: 9;
`

export const StyledBackHr = styled.hr`
   width:600px;
    transform: translateY(-4px);
    height: 4px;
    background-color: lightgrey;
    border: none;
    z-index: -1;
    opacity: 0.3;
`