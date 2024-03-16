import React, {useState} from 'react'

function getButton(title, color, disabled, workfn) {
    return (
        <button type="button" disabled={disabled} className={`btn btn-${color} my-3`} onClick={workfn}>{title}</button>
    )
}

export default function TextArea() {

    const [text, setText] = useState("");
    const [alertText, setAlert] = useState(null);

    const handleChange = (event)=>{
        setText(event.target.value)
    }

    const setUpperCase = ()=>{
        setText(text.toUpperCase());
    }
    const setLowerCase = ()=>{
        setText(text.toLowerCase());
    }
    const beautifyJSON = ()=>{
        try {
            let jsObj = JSON.parse(text);
            setText(JSON.stringify(jsObj, null, 4));
        } catch (e) {
            setAlert({text:"Sorry, but the input cannot be parsed into a JSON object.",color:"danger"});
            setTimeout(()=>{
                setAlert(null);
            }, 2000);
        }
    }
    const copyText = ()=>{
        navigator.clipboard.writeText(text);
    }

    return (
        <>
            {alertText && <div className={`alert alert-dismissible alert-${alertText.color}`}>
                <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
                {alertText.text}
            </div>}
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
            {getButton("Beautify JSON", "success", (text.length===0), beautifyJSON)}
            {getButton("Soon!", "info", true)}
            {getButton("Soon!", "warning", true)}
            {getButton("Soon!", "danger", true)}
            {getButton("Copy Text", "light", (text.length===0), copyText)}
        </>
    )
}
