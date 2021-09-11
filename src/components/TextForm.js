import React,{useState} from 'react'

export default function TextForm(props) {
    const handelUpClick = ()=>{
        console.log("Upper click was clicked"+text);
        let newText=text.toUpperCase();
        setText(newText)
    }
    const handellowClick = ()=>{
        console.log("Upper click was clicked"+text);
        let newText=text.toLowerCase();
        setText(newText)
    }
    const handelclearClick = ()=>{
        console.log("Upper click was clicked"+text);
        let newText="";
        setText(newText)
    }
    const handelOnChange =(event)=>{
        console.log("on Change");
        setText(event.target.value) 
    }


    const [text ,setText]=useState('Enter your text here');
    // setText("New text");
    
    return (
        <>
        <div className="container">
            <h1>{props.heading}</h1>
            <div className="mb-3">
                
                <textarea className="form-control"value={text} onChange={handelOnChange} id="Mybox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handelUpClick}>Upper Case</button>
            <button className="btn btn-primary mx-2" onClick={handellowClick}>Lower Case</button>
            <button className="btn btn-primary mx-2" onClick={handelclearClick}>Clear Case</button>
        </div>
        <div className="container my-3">
            <h1>Your text summary</h1>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008*text.split(" ").length} minutes read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>

        </>
    );
}
