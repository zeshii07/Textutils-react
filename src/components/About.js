// import React ,{useState}from "react";
export default function About(props) {
  
  return (
    <div>
      <div className="container my-4">

    <div className="accordion " id="accordionExample" style={{
      color: props.mode==="dark"? "white":"black",
      backgroundColor: props.mode==="dark"? "black":"white",
    }
      }>
        <div className="accordion-item" style={{
      color: props.mode==="dark"? "white":"black",
      backgroundColor: props.mode==="dark"? "black":"white",
    }
      }>
          <h2 className="accordion-header" style={{
      color: props.mode==="dark"? "white":"black",
      backgroundColor: props.mode==="dark"? "black":"white",
    }
      }>
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={{
      color: props.mode==="dark"? "white":"black",
      backgroundColor: props.mode==="dark"? "black":"white",
    }
      }
              >
              <h4>About Me</h4>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
            >
            <div className="accordion-body"style={{
      color: props.mode==="dark"? "white":"black",
      backgroundColor: props.mode==="dark"? "black":"white",
    }
      }>
               Hello everyone My name is <strong>Zeeshan Ahmad</strong>. I am a student of BS IT final year.
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
              style={{
      color: props.mode==="dark"? "white":"black",
      backgroundColor: props.mode==="dark"? "black":"white",
    }
      }
            >
              <h5>Qualification</h5>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body"style={{
      color: props.mode==="dark"? "white":"black",
      backgroundColor: props.mode==="dark"? "black":"white",
    }
      }>
             
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
              style={{
      color: props.mode==="dark"? "white":"black",
      backgroundColor: props.mode==="dark"? "black":"white",
    }
      }
              >
             <h5> Experiences </h5>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
            >
            <div className="accordion-body"style={{
      color: props.mode==="dark"? "white":"black",
      backgroundColor: props.mode==="dark"? "black":"white",
    }
      }>
              
            </div>
          </div>
        </div>
      </div>
      <div className="container">
      {/* <button className="btn btn-primary my-2" onClick={darkMode}>{buutonText}</button> */}
      </div>
            </div>
    </div>
  );
}
