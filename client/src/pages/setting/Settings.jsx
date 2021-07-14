import Sidebar from "../../componenet/sidebar/Sidebar";
import "./settings.css";

export default function Settings() {
  return (
    <div class="container-fluid">
      <div class="row">
        <div class="main col-lg-9">
          <div class="container ml-3" style={{marginTop:"10%"}}>
            <div class="rounded bg-white mt-5 p-2 card" style={{maxWidth:"50rem",marginLeft:"12%"}}>
              <div class="row">
                <div class="col-md-4 border-right">
                  <div class="d-flex flex-column align-items-center text-center mx-3 my-5">
                    <img
                      class="rounded-circle mt-5"
                      src="https://i.imgur.com/0eg0aG0.jpg"
                      width="100"
                    />
                    <i class="fas fa-camera fa-2x text-default my-1"></i>
                    <span class="font-weight-bold h3">John Doe</span>
                    <span class="text-black-50 h6">john_doe12@bbb.com</span>
                    <span>United States</span>
                  </div>
                </div>
                <div class="col-md-8">
                    <form>
                        <p className="text-center text-bold h4 p-3">Edit Profile</p>
                  <div class="mb-3 mx-5">
                    <label for="exampleFormControlInput1" class="form-label text-dark text-bold">
                      Username
                    </label>
                    <input
                      type="email"
                      class="form-control"
                      id="exampleFormControlInput1"
                      placeholder="username"
                    />
                  </div>

                  <div class="mb-3 mx-5">
                    <label for="exampleFormControlInput1" class="form-label text-dark text-bold">
                      Email
                    </label>
                    <input
                      type="email"
                      class="form-control"
                      id="exampleFormControlInput1"
                      placeholder="name@example.com"
                    />
                  </div>

                  <div class="mb-3 mx-5">
                    <label for="exampleFormControlInput1" class="form-label text-dark text-bold">
                      Password
                    </label>
                    <input
                      type="password"
                      class="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Password"
                    />

                    <br/>
                    <div className="text-center">
                    <button class="btn btn-default" type="button">
                    Update
                  </button>
                  </div>
                  </div>
                  </form>
                </div>
              </div>
          </div>
        </div>
        </div>

        <div class="sidebar col-lg-3">
          <div class="well">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
}
