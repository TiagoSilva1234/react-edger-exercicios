import React, { useState, useLayoutEffect } from 'react';
import { StyledButtonBorder, StyledHr, StyledBackHr } from '../styles/dropdown.styled';


const  SideButtons = () => {
  const [margin,setMargin] = useState("")
  const [url, setUrl] = useState("https://www.teleculinaria.pt/wp-content/uploads/2015/07/panados-de-porco-com-arroz-colorido.jpg")
 

 function handleClick(M,U){
  setMargin(M);
  setUrl(U);
 }
  return (
    <>
      <StyledHr margLeft={margin}></StyledHr>
      <StyledBackHr className="backHr"></StyledBackHr>
      <div>
      <StyledButtonBorder onClick={()=> handleClick("0px","https://www.teleculinaria.pt/wp-content/uploads/2015/07/panados-de-porco-com-arroz-colorido.jpg")} >panados</StyledButtonBorder>
      <StyledButtonBorder onClick={()=> handleClick("200px","https://img.itdg.com.br/tdg/images/recipes/000/000/770/323683/323683_original.jpg?mode=crop&width=710&height=400")}>arroz</StyledButtonBorder>
      <StyledButtonBorder onClick={()=> handleClick("400px","https://www.iguaria.com/wp-content/uploads/2016/09/Iguaria-Espargete-com-Alho.jpg")}>massa</StyledButtonBorder>
      </div>
      <img src={url}/>
    </>
  );
}

export default SideButtons;
