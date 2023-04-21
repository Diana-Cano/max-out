import './App.css';
import { useState } from 'react'

function App() {
  const [btnColor, setBtnColor] = useState("green")
  const newBtnColor = btnColor === 'green' ? 'blue' : 'green'
  const [inputDisabled, setInputDisabled] = useState(false)

  return (
    <div className="App">
      <h1>Testing Playground</h1>
      <p role="paragraph">Button is {inputDisabled ? "disabled" : "enabled"}</p>
      <button 
        style={{backgroundColor: btnColor}} 
        onClick={() => setBtnColor(newBtnColor)}
        disabled={inputDisabled}
      >
        Change button color to {newBtnColor}
      </button>
      <input 
        type="checkbox" 
        defaultChecked={inputDisabled}
        onChange={(e) => setInputDisabled(e.target.checked)}
      />
    </div>
  );
}

export default App;