import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LoginUser, createCart } from "../store/UserActions";
import Navigation from "../components/Navigation";

const SignIn = () => {
  const [currentRadioValue, setCurrentValue] = useState();

  const dispath = useDispatch();
  const user = useSelector((state) => state.user);
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("key"));
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [data, setData] = useState({
    password: "",
    email: "",
  });
  let someData = "admin";
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
                        Sign In
                      </p>
                      <form className="mx-1 mx-md-4">
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
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

                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          {currentRadioValue && data.email && data.password ? (
                            <>
                              <button
                                onClick={async () => {
                                  <Navigation data={someData} />;
                                  if (currentRadioValue == "Admin") {
                                    setLoading(true);
                                    const result = await axios.post(
                                      "http://localhost:3000/loginAdmin",
                                      {
                                        email: data.email,
                                        password: data.password,
                                      }
                                    );
                                    if (result.data) {
                                      const { success, message, user } =
                                        result.data;
                                      if (success) {
                                        Swal.fire(
                                          JSON.stringify(
                                            "Admin has Login Successfully"
                                          )
                                        );
                                        setLoading(false);
                                        dispath(
                                          LoginUser(
                                            user._id,
                                            user.email,
                                            user.username,
                                            "Admin"
                                          )
                                        );

                                        navigate("/admin/dash");
                                      } else {
                                        Swal.fire(message);
                                      }
                                    }
                                    setLoading(false);
                                  } else if (currentRadioValue == "User") {
                                    setLoading(true);
                                    const result = await axios.post(
                                      "http://localhost:3000/loginUser",
                                      {
                                        email: data.email,
                                        password: data.password,
                                      }
                                    );
                                    if (result.data) {
                                      const { success, message, user } =
                                        result.data;
                                      if (success) {
                                        Swal.fire(
                                          JSON.stringify(
                                            "User has Login Successfully"
                                          )
                                        );
                                        setLoading(false);
                                        dispath(
                                          LoginUser(
                                            user._id,
                                            user.email,
                                            user.username,
                                            "User"
                                          )
                                        );
                                        dispath(createCart());
                                        navigate("/dash");
                                      } else {
                                        Swal.fire(message);
                                      }
                                    } else {
                                      Swal.fire("Login Failed");
                                    }
                                    setLoading(false);
                                  }
                                }}
                                type="button"
                                className="btn btn-primary btn-lg"
                              >
                                Login
                              </button>
                            </>
                          ) : (
                            <>
                              <button
                                disabled={true}
                                type="button"
                                className="btn btn-primary btn-lg"
                              >
                                Login
                              </button>
                            </>
                          )}
                        </div>

                        <div className="text-center">
                          {loading && (
                            <div className="spinner-border" role="status">
                              <span className="visually-hidden">
                                Loading...
                              </span>
                            </div>
                          )}
                        </div>
                      </form>
                      <div className="text-center">
                        <Link to="/signUp"> Create New Account</Link>
                      </div>
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

export default SignIn;
