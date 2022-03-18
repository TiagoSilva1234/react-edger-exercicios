import React,{ useState, useRef} from 'react';
import './App.css';
import Dropdown from './components/Dropdown';
import Toptext from './components/Toptext';

function App() {
 const [value,setValue] = useState("arroz");

  return (
    <div className="App">
      <Toptext text={value} method={setValue} />
      <Dropdown text={value} method={setValue} />
    </div>
    
  );
}

export default App;
