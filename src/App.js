import React, { useState } from "react";
import "./App.css";

function App() {
  const [horizontal, setHorizontal] = useState(10);
  const [verticle, setVerticle] = useState(10);
  const [blur, setBlur] = useState(10);
  const [colour, setColour] = useState('black');

  return (
    <div className="App">

      <div className="line">
    
        <label>Horizontal Length</label>
        <input type="range"  min="-200" max="200" value={horizontal} onChange={(e)=>setHorizontal(e.target.value)} />
        
          <label >Verticle Lenght</label>
          <input type="range"  min="-200" max="200" value={verticle} onChange={(e)=>setVerticle(e.target.value)} />
         <label>Blur</label>
         <input type="range"  min="0" max="200" value={blur} onChange={(e)=>setBlur(e.target.value)}/>
         <label htmlFor="">Select Colour</label>
          <input type="color" className="color"  min="0" max="200" value={colour} onChange={(e)=>setColour(e.target.value)}/>
      </div>
      <div className="output" >
        <div className="box" style={{  boxShadow:`${horizontal}px ${verticle}px ${blur}px ${colour} `}}>
<p> Box Shodow : {horizontal}px {verticle}px {blur}px {colour}px</p>
        </div>
      </div>
    </div>
  );
}

export default App;
