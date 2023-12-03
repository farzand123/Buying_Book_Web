import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { LogoutUser } from "../store/UserActions";

export const CustomNav = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const [searchTerm, setText] = useState();
  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary navbar bg-primary"
        // data-bs-theme="dark"
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Book Store
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              {!user && (
                <>
                  <a className="nav-link " aria-current="page" href="/signUp">
                    Sign Up
                  </a>
                  <a className="nav-link " aria-current="page" href="/">
                    Sign In
                  </a>
                </>
              )}
              {user && (
                <a
                  className="nav-link"
                  href="#"
                  onClick={() => {
                    if (user) {
                      if (user.type == "Admin") navigate("/admin/dash");
                      else navigate("/dash");
                    } else navigate("/books");
                  }}
                >
                  Dashboard
                </a>
              )}

              <a className="nav-link" href="/books">
                Books
              </a>

              <a className="nav-link" href="/authors">
                Authors
              </a>
              {user?.type == "User" && (
                <a className="nav-link" href="/checkOut">
                  Checkout
                </a>
              )}

              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  value={searchTerm}
                  onChange={(e) => setText(e.target.value)}
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
              {user && (
                <span>
                  {" "}
                  <img
                    title={user.userName}
                    style={{
                      width: "50px",
                      borderRadius: "50px",
                      margin: "0px 10px",
                    }}
                    src={`https://api.dicebear.com/6.x/initials/svg?seed=${user?.userName}`}
                  ></img>
                  <button
                    className="btn btn-warning"
                    onClick={() => {
                      dispatch(LogoutUser());
                      navigate("/");
                    }}
                  >
                    Logout
                  </button>
                </span>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
const Navigation = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  let navigations = [];

  if (user?.type === "Admin")
    navigations = [
      { route: "/", name: "SignIn", backgroundColor: "gray", color: "white" },
      {
        route: "/signUp",
        name: "SignUp",
        backgroundColor: "purple",
        color: "white",
      },

      {
        route: "/admin/dash",
        name: "Admin Dashboard",
        backgroundColor: "yellow",
        color: "black",
      },
    ];
  else {
    navigations = [
      { route: "/", name: "SignIn", backgroundColor: "gray", color: "white" },
      {
        route: "/signUp",
        name: "SignUp",
        backgroundColor: "purple",
        color: "white",
      },
      {
        route: "/dash",
        name: "User Dashboard",
        backgroundColor: "blue",
        color: "white",
      },
      {
        route: "/checkOut",
        name: "Cart Checkout",
        backgroundColor: "blue",
        color: "white",
      },
    ];
  }

  const navigate = useNavigate();

  return (
    <div className="my-4">
      {navigations.map((item, index) => (
        <button
          key={index}
          // style={{ backgroundColor: item.backgroundColor, color: item.color }}
          className="btn btn-primary mx-1"
          onClick={() => {
            navigate(item.route);
          }}
        >
          {item.name}
        </button>
      ))}

      <span></span>
    </div>
  );
};

export default Navigation;
