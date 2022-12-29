import Square from './Square';
import Input from './Input';
import './App.css';
import { useState } from 'react';

function App() {
  const [colorvalue, setColorvalue] = useState('')
  const [hexValue, setHexValue] = useState('')
  const [isDarkText, setIsDarkText] = useState(true)

  return (
    <div className="App">
     <Square 
     colorValue={colorvalue}
     hexValue={hexValue}
     isDarkText={isDarkText}
     />
     <Input 
        colorvalue={colorvalue}
         setColorvalue={setColorvalue}
         setHexValue={setHexValue}
         isDarkText={isDarkText}
         setIsDarkText={setIsDarkText}
     />
    </div>
  );
}

export default App;
