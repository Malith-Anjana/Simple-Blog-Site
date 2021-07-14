import React from "react";

export default function Header() {
  return (
    <div>
      <div
        class="p-5 text-center bg-image"
        style={{
      backgroundImage: "url('https://mdbcdn.b-cdn.net/img/new/slides/041.jpg')",
      height: '700px'}}
      >
        <div class="mask" style={{backgroundColor: "rgba(0, 0, 0, 0.6)"}}>
          <div class="d-flex justify-content-center align-items-center h-100">
            <div class="text-white">
              <h4 class="mb-3" style={{fontFamily:"'Bitter', serif", fontSize:"4rem"}}>React & Node</h4>
              <h1 class="mb-3" style={{fontSize:"10rem",fontFamily:"'Lobster', cursive"}}>Blog</h1>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
