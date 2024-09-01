import React, { useState } from 'react'

export default function TextForm(props) {
  
  const uCaseClick =()=>{
    
    let newText=text.toUpperCase()
    setText(newText);
  }
  const lCaseClick =()=>{
    
    let newText=text.toLowerCase()
    setText(newText);
  }

  const clearTextClick =()=>{
    let newText=''
    setText(newText);
  }

 
    const handleOnChange =(event)=>{
      setText(event.target.value)
    }

  

    const [text,setText]=useState("")
  return (
    <>
    <div className='continer'>
      
      <h3>{props.heading}</h3>
  <div className="mb-3">
    <textarea
      className="form-control"
      id="myBox"
      rows={8}
      defaultValue={""}
      value={text}
      onChange={handleOnChange}
    />
  </div>
  <button 
    className="btn btn-primary mx-2"  onClick={uCaseClick} >Convert To UpperCase
  </button>
  
  <button 
    className="btn btn-primary " onClick={lCaseClick} > Convert To LowerCase
  </button>

  <button 
    className="btn btn-primary mx-2"  onClick={clearTextClick} >Clear Text
  </button>

    </div>

    <div className="container my-3">
      <h2>Text summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>in {0.008 * text.split(" ").length } Minutes</p>
      
    </div>
    </>
  )
}
