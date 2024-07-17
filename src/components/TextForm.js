import React, { useState } from "react";
export default function TextForm(props) {
  /////////////////////////////////////////
  ///////////////////////// Functions 
  const handleUpperCase = () => {
    setText(text.toUpperCase());
    props.showAlert("Conerted to Upper Case", "success")
  };
  const handlelowerCase = () => {
    setText(text.toLowerCase());
    props.showAlert("Conerted to lower Case", "success")
  };
  const clearText = () => {
    setText("");
    props.showAlert("Text Cleared", "danger")
  };
  const handleOnchabge = (event) => {
    console.log("onchange was clicked");
    setText(event.target.value);
  };
  const textExtracter = () => {
    let result = "";
    let prevCharWasSpace = false;

    for (let i = 0; i < text.length; i++) {
      let char = text[i];

      // Check if the character is an alphabetic letter
      if ((char >= "a" && char <= "z") || (char >= "A" && char <= "Z")) {
        result += char;
        prevCharWasSpace = false;
      } else if (char === ".") {
        result += char;
      } else if (char === " ") {
        // Add a single space if the previous character was not a space
        if (!prevCharWasSpace) {
          result += " ";
          prevCharWasSpace = true;
        }
      } else {
        // Ignore non-alphabetic characters
        prevCharWasSpace = false;
      }
    }

    // Trim leading and trailing spaces from the result
    setText(result.trim());
    props.showAlert("Text Normalized","success")
  };
  function speak() {
    let msg = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(msg);
    props.showAlert("Text Spoken","success")
  }
  ///////////////////////////////////////////

const words=()=>
{
  let word = 0;
  if(text==="")
  {
    return word
  }
  else
  {
    let textArray = text.split(" ");
    word = textArray.length;
    return word;
    }

}
  ////////////////////////////////

  ////////////// Usestate Text

  const [text, setText] = useState("");
  ////////////////////////////

  return (
    <div>
      <div className="container" style={{
        color: props.mode === "dark" ? "white" : "black"
      }}>

      <h1>{props.heading}</h1>
      <div
        className="mb-3 my-4" 
        >
        <label htmlFor="mybox" className="form-label"></label>
        <textarea
          className="form-control"
          id="mybox"
          rows="10"
          placeholder="Enter your text"
          value={text}
          style={{
            color: props.mode==="dark" ?  "white" : "black",
            backgroundColor: props.mode=== "dark" ? "#191970": "white"

          }}
          onChange={handleOnchabge}
          ></textarea>
          </div>
        <button className="btn btn-primary mx-2 my-3" onClick={handleUpperCase}>
          convert to Upper Case
        </button>
        <button className="btn btn-success mx-2 my-3" onClick={handlelowerCase}>
          convert to Lower Case
        </button>
        <button className="btn btn-danger mx-2 my-3" onClick={clearText}>
          {" "}
          Clear Text
        </button>
        <button className="btn btn-success mx-2 my-3" onClick={textExtracter}>
          Normalize Text
        </button>
        <button className="btn btn-primary mx-2 my-3" onClick={speak}>
          Read Loud
        </button>
      <div className="container my-3">
        <h2>your text summary</h2>
        <h6>
          {words()} words and {text.length} characters

        </h6>
        <p>{0.008 *words()} minutes to read</p>
        <h3>Preview</h3>
        <p >{text}</p>
      </div>
          </div>
    </div>
  );
}
