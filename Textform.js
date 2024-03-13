import React, { useState } from 'react'

export default function Textform(props) {
  const bigValue =()=>{
    // console.log("Bigger Value");
    let newText=text.toUpperCase();
    setText(newText);
  } 

  const handleChange =(event)=>{
    // console.log("Change ho gya");
    setText(event.target.value)
  }

  const[text, setText] = useState("Enter Text Here");

  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
<div className="mb-3">
<label htmlFor="myForm" className="form-label"><h3>Write Here</h3></label>
<h1>{props.heading}</h1>
  <textarea className="form-control" value={text} onChange={handleChange} style={{backgroundColor:props.mode==='dark'?'grey':'white'}}id="myForm" rows="10"></textarea>
  <button className="btn btn-primary my-3" onClick={bigValue}>Uppercase</button>
</div>
    </div>
{/* 
    <div className="container">
      <p>{text.split (" ").length} words {text.length} characters</p>
    </div> */}
    </>
  )
}
