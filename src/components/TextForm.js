import React, { useState } from "react";

function TextForm(props) {
  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
  };

  // this function converts the text in uppercase
  const handleUpClick = () => {
    // console.log("Uppercase was clicked " + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "success");
  };

  // this function converts the text in lowercase
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  // this function clears the text in form field
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
  };

  // this function pronounce/speak the written text in form field
  const handleSpeakClick = (msg) => {
    msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  };

  // This function copy text in clipboard
  const handleCopyClick = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Coppied to clipboard", "success");
  };

  // This function removes exptra spaces
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };
  // const [count, setcount] = useState(0);
  const [text, setText] = useState("");
  //   text = "new text";   // worng way to change the state
  //   setText("new text");
  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
            style={{
              backgroundColor: props.mode === "dark" ? "#aea2a2" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          UPPERCASE
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>
          lowercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleSpeakClick}>
          Pronounce
        </button>
        <button className="btn btn-primary mx-1" onClick={handleCopyClick}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
      </div>

      <div
        className="container my-3 "
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter something in the textbox above to preview here"}
        </p>
      </div>
    </>
  );
}

export default TextForm;
