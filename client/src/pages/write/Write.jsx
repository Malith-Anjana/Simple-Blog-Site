import React from "react";
import "./write.css";

export default function Write() {
  return (
    <div className="container">
        <img
          src="https://mdbootstrap.com/img/new/slides/041.jpg"
          className="writeImg"
          alt="..."
        />
        <form className="writeForm">
            <div className="writeFormGroup">
    <label htmlFor="fileInput">
    <i className="writeIcon fas fa-plus-circle fa-7x"></i>
    </label>
    <input type="file" id="fileInput" style={{display:"none"}}/>
    <input type="text" Placeholder="Title" className="writeInput writeInputText" autoFocus={true}/>
    </div>
    <div className="writeFormGroup">
        <textarea placeholder="Write Your Story..." style={{maxWidth:"60vw"}} rows="4" type="text" className="writeInput writeText"></textarea>
    </div>
    <div className="text-center">
    <button className="btn btn-primary mt-6 mb-7">Publish</button>
    </div>
    </form>
    </div>
    
  );
}
