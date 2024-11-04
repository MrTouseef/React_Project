// import { useState } from "react";
import React, { useState } from "react";

export default function Textare() {
  const [text, setText] = useState("");
  // const [history, setHistory] = setHistory([]);

  const changeUphandle = () => {
    console.log("Change to Upper Case Clicked!");
    let newtext = text.toUpperCase();
    setText(newtext);
  };
  const changeLchandle = () => {
    console.log("Change to Upper Case Clicked!");
    let newtext = text.toLowerCase();
    setText(newtext);
  };
  const changeClearhandle = () => {
    // console.log("Change to Upper Case Clicked!")
    let newtext = "";
    setText(newtext);
  };
  const changeReversehandle = () => {
    // setHistory([...history, text]);
    // console.log("Change to Upper Case Clicked!")
    let newtext = text.split(" ").reverse().join(" ");
    setText(newtext);
  };
  const copyToClipboard = () => {
    // Use navigator.clipboard.writeText to copy the current text to the clipboard
    navigator.clipboard.writeText(text).then(() => {
        console.log(alert("Text copied to clipboard"));
    }).catch(err => {
        console.error("Failed to copy text: ", err);
    });
};

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div>
        <h1 className="heading">Enter your text here</h1>
        <div class="mb-3">
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="8"
            value={text}
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={changeUphandle}>
          Change To UpperCase
        </button>

        <button className="btn btn-primary mx-2" onClick={changeLchandle}>
          Change To lowerCase
        </button>

        <button className="btn btn-primary mx-2" onClick={changeClearhandle}>
          Clear All Text
        </button>

        <button className="btn btn-primary mx-2" onClick={changeReversehandle}>
          Reverse Text
        </button>

        <button className="btn btn-primary mx-2" onClick={copyToClipboard}>
Copy Text To ClipBoard        </button>
      </div>

      <div className="container my-3">
        <h2>Text Summry</h2>
        <p>
          <b>No of Words:</b> {text.split(" ").length} | <b>No of Letters:</b>{" "}
          {text.length}
        </p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
