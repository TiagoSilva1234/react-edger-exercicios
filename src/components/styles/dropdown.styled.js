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
margin-top: 60px; 
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