import React from 'react'
import { useState } from 'react'

export default function Home(props) {
    const [text, setText] = useState('');
    const handleUpClicked = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Converted to Uppercase', 'success');
    }

    const handleLowClicked = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('Converted to Lowercase', 'success');
    }

    const handleClearAllClicked = () => {
        let newText = '';
        setText(newText);
        props.showAlert('Text Cleared', 'success');
    }

    const handleCopyAllClicked = () => {
        let text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert('Text Copied', 'success');
    }

    const handleExtraSpacesClicked = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert('Extra Spaces Deleted', 'success');
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    return (
        <>
            <div className="home" style={{ color: props.mode === 'dark' ? 'white' : 'black', backgroundColor: props.mode === 'dark' ? '#000000' : 'white' }}>
                <div className="container">
                    <h1>Enter the text to analyze</h1>
                    <div className="mt-2">
                        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{ color: props.mode === 'dark' ? 'white' : 'black', backgroundColor: props.mode === 'dark' ? '#2f3033' : 'white' }}></textarea>
                    </div>
                    <button className="btn mx-1 mt-3" onClick={handleUpClicked}>Convert To Uppercase</button>
                    <button className="btn mx-1 mt-3" onClick={handleLowClicked}>Convert To Lowercase</button>
                    <button className="btn mx-1 mt-3" onClick={handleCopyAllClicked}>Copy All Text</button>
                    <button className="btn mx-1 mt-3" onClick={handleExtraSpacesClicked}>Delete Extra Space</button>
                    <button className="btn mx-1 mt-3" onClick={handleClearAllClicked}>Clear All Text</button>
                </div>
                <div className="container mt-4">
                    <h2>Your Text Summary</h2>
                    <p>
                        {text.trim().length > 0
                            ? `${text.trim().split(/\s+/).length} words and ${text.length} characters.`
                            : "0 words and 0 characters."}
                    </p>
                    <p>
                        {text.trim().length > 0
                            ? `${(0.008 * text.trim().split(/\s+/).length).toFixed(3)} Minutes read`
                            : "0 Minutes read"}
                    </p>
                    <h2>Preview</h2>
                    <p className='text-preview'>{text.trim().length > 0 ? text : "Nothing to preview!"}</p>
                </div>

                <div className="created">Created by ❤️ Vivek</div>
            </div>
        </>
    )
}
