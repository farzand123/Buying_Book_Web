import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
const SignUp = () => {
  const [currentRadioValue, setCurrentValue] = useState();

  const [data, setData] = useState({
    password: "",
    password2: "",
    name: "",
    email: "",
    agreed: false,
  });
  return (
    <>
      <section className="vh-100" style={{ backgroundColor: "#eee" }}>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{ borderRadius: "25px" }}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Sign up
                      </p>
                      <form className="mx-1 mx-md-4">
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              value={data.name}
                              onChange={(e) => {
                                setData({ ...data, name: e.target.value });
                              }}
                              type="text"
                              id="form3Example1c"
                              className="form-control"
                            />
                            <label
                              className="form-label"
                              htmlFor="form3Example1c"
                            >
                              Your Name
                            </label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              value={data.email}
                              onChange={(e) => {
                                setData({ ...data, email: e.target.value });
                              }}
                              type="email"
                              id="form3Example3c"
                              className="form-control"
                            />
                            <label
                              className="form-label"
                              htmlFor="form3Example3c"
                            >
                              Your Email
                            </label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              value={data.password}
                              onChange={(e) => {
                                setData({ ...data, password: e.target.value });
                              }}
                              type="password"
                              id="form3Example4c"
                              className="form-control"
                            />
                            <label
                              className="form-label"
                              htmlFor="form3Example4c"
                            >
                              Password
                            </label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              value={data.passwor2}
                              onChange={(e) => {
                                setData({ ...data, password2: e.target.value });
                              }}
                              type="password"
                              id="form3Example4cd"
                              className="form-control"
                            />
                            <label
                              className="form-label"
                              htmlFor="form3Example4cd"
                            >
                              Repeat your password
                            </label>
                          </div>
                        </div>

                        <div className="d-flex align-items-center justify-content-center">
                          <div className="form-check m-1">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                              value={"User"}
                              onChange={(e) => setCurrentValue(e.target.value)}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexRadioDefault1"
                            >
                              User
                            </label>
                          </div>
                          <div className="form-check m-1">
                            <input
                              className="form-check-input"
                              type="radio"
                              value={"Admin"}
                              onChange={(e) => setCurrentValue(e.target.value)}
                              name="flexRadioDefault"
                              id="flexRadioDefault2"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexRadioDefault2"
                            >
                              Admin
                            </label>
                          </div>
                        </div>

                        <div className="form-check d-flex justify-content-center mb-5">
                          <input
                            className="form-check-input me-2"
                            type="checkbox"
                            id="form2Example3c"
                            value={"checked"}
                            checked={data.agreed}
                            onChange={() => {
                              setData({ ...data, agreed: !data.agreed });
                            }}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="form2Example3"
                          >
                            I agree all statements in{" "}
                            <a href="#!">Terms of service</a>
                          </label>
                        </div>

                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          {currentRadioValue &&
                          data.agreed &&
                          data.email &&
                          data.password &&
                          data.name &&
                          data.password2 &&
                          data.password2 === data.password ? (
                            <>
                              <button
                                onClick={async () => {
                                  if (currentRadioValue === "Admin") {
                                    const result = await axios.post(
                                      "http://localhost:3000/createAdmin",
                                      {
                                        email: data.email,
                                        password: data.password,
                                        username: data.name,
                                      }
                                    );
                                    Swal.fire(JSON.stringify(result.data));
                                  } else if (currentRadioValue == "User") {
                                    const result = await axios.post(
                                      "http://localhost:3000/createUser",
                                      {
                                        email: data.email,
                                        password: data.password,
                                        username: data.name,
                                      }
                                    );
                                    Swal.fire(JSON.stringify(result.data));
                                  }
                                }}
                                type="button"
                                className="btn btn-primary btn-lg"
                              >
                                Register
                              </button>
                            </>
                          ) : (
                            <>
                              <button
                                disabled={true}
                                type="button"
                                className="btn btn-primary btn-lg"
                              >
                                Register
                              </button>
                            </>
                          )}
                        </div>
                      </form>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                        className="img-fluid"
                        alt="Sample image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default SignUp;
