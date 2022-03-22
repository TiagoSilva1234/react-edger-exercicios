import React, { useState, useLayoutEffect } from 'react';
import DropdownFather from './components/DropdownFather/index.js';
import Calculator from './components/Calculator/index.js'
import SideButtons from './components/SideButtons/index.js'


function App() {


  return (
    <div className="App">
      <DropdownFather/>
      <SideButtons/>
      <Calculator/>
    </div>
  );
}

export default App;
