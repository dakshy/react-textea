import React, {useState} from 'react'

function Button(props) {
    return (
        <button type="button" 
            disabled={props.disabled} 
            className={`btn btn-${props.color}`} 
            onClick={props.workfn}
        >
            {props.title}
        </button>
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

    const [text, setTextData] = useState(localStorage['text'] || "");
    const [alertText, setAlert] = useState(null);

    const setText = (t)=>{
        setTextData(t)
        localStorage['text'] = t;
    }

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
    const toBinary = ()=>{
        let num = parseInt(text);
        if(!isNaN(num)) {
            setText(num.toString(2));
        }
        else {
            setAlert({text:"Sorry, but the input cannot be parsed into int type.",color:"danger"});
            setTimeout(()=>{
                setAlert(null);
            }, 2500);
        }
    }
    const copyText = ()=>{
        navigator.clipboard.writeText(text);
    }
    const clearText = ()=>{
        setText("");
    }

    let disButtons = text.length===0;

    return (
        <>
            {alertText && <div className={`alert alert-dismissible alert-${alertText.color}`}>
                <button type="button" className="btn-close" data-bs-dismiss="alert"></button>
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
            <div className='btn-group d-flex flex-wrap my-3'>
                <Button title="Lower Case" color="primary" disabled={disButtons} workfn={setLowerCase}/>
                <Button title="Upper Case" color="secondary" disabled={disButtons} workfn={setUpperCase}/>
                <Button title="Beautify JSON" color="success" disabled={disButtons} workfn={beautifyJSON}/>
                <Button title="Filter Text" color="info" disabled={disButtons} workfn={filterText}/>
                <Button title="Binary Number" color="warning" disabled={disButtons} workfn={toBinary}/>
                <Button title="Clear Text" color="danger" disabled={disButtons} workfn={clearText}/>
                <Button title="Copy Text" color="light" disabled={disButtons} workfn={copyText}/>
            </div>
        </>
    )
}
