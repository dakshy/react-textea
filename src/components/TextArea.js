import React, {useState} from 'react'

function getButton(title, color, disabled, workfn) {
    return (
        <button type="button" disabled={disabled} className={`btn btn-${color} my-3`} onClick={workfn}>{title}</button>
    )
}

export default function TextArea() {

    const [text, setText] = useState("");

    const handleChange = (event)=>{
        setText(event.target.value)
    }

    const setUpperCase = ()=>{
        setText(text.toUpperCase());
    }
    const setLowerCase = ()=>{
        setText(text.toLowerCase());
    }
    const copyText = ()=>{
        navigator.clipboard.writeText(text);
    }

    return (
        <>
            <div>
            <label htmlFor="mainText" className="form-label mt-4">Text Converter</label>
            <textarea 
                className="form-control" 
                rows="8" 
                value={text} 
                onChange={handleChange}
                placeholder='Enter your text here...'
            ></textarea>
            </div>
            {getButton("Lower Case", "primary", (text.length===0), setLowerCase)}
            {getButton("Upper Case", "secondary", (text.length===0), setUpperCase)}
            {getButton("Soon!", "success", true)}
            {getButton("Soon!", "info", true)}
            {getButton("Soon!", "warning", true)}
            {getButton("Soon!", "danger", true)}
            {getButton("Copy Text", "light", (text.length===0), copyText)}
        </>
    )
}
