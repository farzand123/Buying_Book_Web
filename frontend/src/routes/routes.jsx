import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Dashboard from "../pages/Admin/Dashboard";
import ParentComponet from "../components/ParentComponet";
import CreateNewBook from "../pages/Admin/CreateBook";
import GetBooks from "../pages/Admin/GetBooks";
import BookDetail from "../pages/BookDetail";
import EditBook from "../pages/Admin/EditBook";
import Game from "../pages/game";
import MainProps from "../pages/props/MainProps";
import UserDash from "../pages/User/UserDash";
import ChechkOut from "../pages/User/chechkout";
import MyBooks from "../pages/MyBooks";
import Authors from "../pages/Authors";
import GetBooksByAuthor from "../pages/User/BooksByAuthor";

const MainRoutes = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/props" element={<MainProps />} />

          <Route
            path="/myBooks"
            element={
              <ParentComponet>
                <MyBooks />
              </ParentComponet>
            }
          />
          <Route
            path="/authors"
            element={
              <ParentComponet>
                <Authors />
              </ParentComponet>
            }
          />
          <Route
            path="/authors/:name"
            element={
              <ParentComponet>
                <GetBooksByAuthor />
              </ParentComponet>
            }
          />

          <Route path="/game" element={<Game />} />
          <Route
            path="/"
            element={
              <ParentComponet>
                <SignIn />
              </ParentComponet>
            }
          />

          <Route
            path="/books"
            element={
              <ParentComponet>
                <GetBooks />
              </ParentComponet>
            }
          />
          <Route
            path="/dash"
            element={
              <ParentComponet>
                <UserDash />
              </ParentComponet>
            }
          />

          <Route
            path="/signUp"
            element={
              <ParentComponet>
                <SignUp />
              </ParentComponet>
            }
          />

          <Route
            path="/checkOut"
            element={
              <ParentComponet>
                <ChechkOut />
              </ParentComponet>
            }
          />
          <Route
            path="/admin/dash"
            element={
              <ParentComponet>
                <Dashboard />
              </ParentComponet>
            }
          />
          <Route
            path="/admin/create/book"
            element={
              <ParentComponet>
                <CreateNewBook />
              </ParentComponet>
            }
          />
          <Route
            path="/admin/books"
            element={
              <ParentComponet>
                <GetBooks />
              </ParentComponet>
            }
          />
          <Route
            path="/admin/book/:id"
            element={
              <ParentComponet>
                <BookDetail />
              </ParentComponet>
            }
          />
          <Route
            path="/admin/book/edit/:id"
            element={
              <ParentComponet>
                <EditBook />
              </ParentComponet>
            }
          />
        </Routes>
      </Router>
    </>
  );
};
export default MainRoutes;
