import React, {useState} from 'react'

function getButton(title, color, disabled, workfn) {
    return (
        <button type="button" disabled={disabled} className={`btn btn-${color} my-3`} onClick={workfn}>{title}</button>
    )
}

function getWords(text) {
    let words = text.split(" ").filter( (t)=>{ return t.length>0; } );
    words = text.split("\n").filter( (t)=>{ return t.length>0; } );
    return words.length
}

function getLines(text) {
    let lines = text.split("\n").filter( (t)=>{ return t.length>0; } );
    return lines.length
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
            }, 2500);
        }
    }
    const filterText = ()=>{
        let filter = prompt("Enter the text pattern to search for");
        if(filter) {
            let splitText = text.split("\n");
            let filtered = [];
            for(let i=0;i<splitText.length;i++){
                if(splitText[i].includes(filter))
                filtered.push(splitText[i]);
            }
            setText(filtered.join("\n"));
        }
        else {
            setAlert({text:"Filter Text cannot be empty.",color:"danger"});
            setTimeout(()=>{
                setAlert(null);
            }, 2500);
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
            <label htmlFor="mainText" className="form-label mt-4">
                {getLines(text)} Lines, {getWords(text)} Words, {text.length} Characters
            </label>
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
            {getButton("Filter Text", "info", (text.length===0), filterText)}
            {getButton("Soon!", "warning", true)}
            {getButton("Soon!", "danger", true)}
            {getButton("Copy Text", "light", (text.length===0), copyText)}
        </>
    )
}
