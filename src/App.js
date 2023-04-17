import { useState } from 'react'
import './App.css';

function App() {
  const [secondclass, setSecondclass] = useState(false)
  const [inputvalue, setInputvalue] = useState('')
  const image_link = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputvalue}`


  const myFunc = () => {
    setSecondclass(secondclass => !secondclass)
  }

  const handleKeyUp = () => {
    if (!inputvalue) {
      setSecondclass(false)
    }
  }

  return (
    <div className="hh">
      <div className={`wrapper ${secondclass ? "active" : ""}`}>
        <header>
          <h1>QR Code Generator</h1>
          <p>paste a url or enter text to create QR code</p>
        </header>
        <div className='form'>
          <input value={inputvalue} onChange={(e) => setInputvalue(e.target.value)} type="text" placeholder='Enter text or Url' onKeyUp={handleKeyUp} />
          <button onClick={myFunc}>Generate QR Code</button>
        </div>
        <div className="qr-code">
          <img src={image_link} alt="qr-code" />
        </div>
      </div>
      <p className='name'>Created by <h1>Doniyorjon</h1></p>
    </div>
  );
}

export default App;
