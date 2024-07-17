import React ,{useState}from "react";

export default function About() {
  const[myStyle,setMystyle]=useState({
    color:"black",
    backgroundColor:"white",
  });
  const[buutonText,setButtonText]=useState("Dark mode")
  const darkMode=()=>{
   if(myStyle.backgroundColor==="white"){
    setMystyle({
      color:"white",
      backgroundColor:"black",
      border:".5px solid white"
    })
    setButtonText("Light Mode")
   }
   else
   {
    setMystyle({
      color:"black",
      backgroundColor:"white",
   })
   setButtonText("Dark Mode")
  }}
  return (
    <div>
      <div className="container my-4">

      <div className="accordion " id="accordionExample" style={myStyle}>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" style={myStyle}>
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={myStyle}
              >
              <h4>About Me</h4>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
            >
            <div className="accordion-body"style={myStyle}>
               Hello everyone My namr is <strong>Zeeshan Ahmad</strong>. I am a student of BS IT final year.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={myStyle}
            >
              <h5>Qualification</h5>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body"style={myStyle}>
             
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={myStyle}
              >
             <h5> Experiences </h5>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
            >
            <div className="accordion-body"style={myStyle}>
              
            </div>
          </div>
        </div>
      </div>
      <div className="container">
      <button className="btn btn-primary my-2" onClick={darkMode}>{buutonText}</button>
      </div>
            </div>
    </div>
  );
}
