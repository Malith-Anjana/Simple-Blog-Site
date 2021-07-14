import React from "react";
import './singlePost.css'

export default function SinglePost() {
  return (
    <div>
      <div class="ml-3 my-3" style={{ maxWidth: "100%" }}>
        <img
          src="https://mdbootstrap.com/img/new/slides/041.jpg"
          class="card-img-top px-3 py-1"
          alt="..."
        />
        <div class="card-body">
          <div class="d-flex justify-content-between">
            <p></p>
            <h2 class="card-title text-center" style={{fontFamily:"'STIX Two Math', serif", fontWeight:"bold", fontSize:"50px"}}>
              <b>Card title</b>
            </h2>
            <div>
                <a>
            <i class="fas fa-trash fa-2x text-danger px-3"></i></a>
                
                <a><i class="fas fa-edit fa-2x text-success"></i>
                </a></div>
          </div>

          <div class="d-flex">
            <div class="p-2">
              <p
                className="text-primary"
                style={{
                  fontFamily: " 'Montserrat', sans-serif",
                  fontSize: "20px",
                }}
              >
                Author:
              </p>
            </div>
            <div class="p-2">
              <p
                className="text-primary"
                style={{
                  fontFamily: " 'Montserrat', sans-serif",
                  fontSize: "20px",
                  fontWeight: "bold",
                }}
              >
                Malith
              </p>
            </div>
            <div class="ml-auto p-2">
              <p
                className="text-warning"
                style={{
                  fontFamily: " 'Montserrat', sans-serif",
                  fontSize: "20px",
                  fontWeight: "bold",
                }}
              >
                1 hour ago...
              </p>
            </div>
          </div>

          <p class="card-text text-justify font-weight-bolder pFirstLetter" style={{fontFamily:"'STIX Two Math', serif"}}>
            <h5>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit
              mollitia nisi aperiam, facilis sit ex earum debitis vel iusto esse
              optio sequi, rerum at! Quam omnis vero eveniet in enim. This is a
              wider card with supporting text below as a natural lead-in to
              additional content. This content is a little bit longer. Lorem
              ipsum dolor sit amet, consectetur adipisicing elit. Vero
              laboriosam vitae perspiciatis quas eveniet? Sapiente, explicabo.
              Ab tempore eius expedita porro eligendi, incidunt nesciunt magnam
              aspernatur tenetur dolorum sapiente, placeat omnis magni adipisci
              in ratione molestias? Rerum itaque quaerat et doloremque eveniet
              quia, aliquid nesciunt tempora alias soluta amet mollitia illo
              dolorem! Obcaecati nemo unde necessitatibus. Consequatur
              consectetur laudantium nisi in culpa fuga quidem repellat
              temporibus sit saepe quia unde, eveniet officia enim reiciendis,
              vitae, aspernatur nulla aliquid dolores! Quis reiciendis beatae,
              asperiores delectus voluptate, recusandae officia adipisci, ut ad
              saepe eveniet suscipit enim odit fugiat sint nobis rerum at. Quod
              vel eligendi ab unde ad commodi hic ea odit ipsa, porro fugit
              ratione doloremque, rerum nemo est, praesentium nam ducimus.
              Tempore incidunt repudiandae totam libero? Ipsum, incidunt maxime
              minima magni nam placeat nemo dolorum? Eum, aut quae. Tempora ut
              dolorem totam provident corporis odit a quia eveniet commodi
              temporibus. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Pariatur quo dolor enim, impedit quis sunt labore dolorum
              dolore iste omnis eaque laboriosam exercitationem! Esse magni
              adipisci soluta nobis nesciunt pariatur?
            </h5>
          </p>
          <p class="card-text mt-4">
            <small class="text-muted h5">Last updated 3 mins ago</small>
          </p>
        </div>
      </div>
    </div>
  );
}
