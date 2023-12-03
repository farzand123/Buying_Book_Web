import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import States from "./States";
import ArrayStates from "./ArrayStates";
import NameStates from "./NameStates";
import SignIn from "./pages/SignIn";
import { Provider } from "react-redux";
import store, { persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navigation from "./components/Navigation";
import Form from "./components/Form";
import ParentComponet from "./components/ParentComponet";
import FetchData from "./FetchData";
import Todo from "./components/Todo";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Admin/Dashboard";
import GetBooks from "./pages/Admin/GetBooks";
import CreateBook from "./pages/Admin/CreateBook";
import MainRoutes from "./routes/routes";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: (
//       <ParentComponet>
//         <div>Home Page !</div>
//       </ParentComponet>
//     ),
//   },
//   {
//     path: "/class",
//     element: (
//       <ParentComponet>
//         <Todo />
//       </ParentComponet>
//     ),
//   },
//   {
//     path: "/signUp",
//     element: (
//       <ParentComponet>
//         <SignUp />
//       </ParentComponet>
//     ),
//   },

//   {
//     path: "/name",
//     element: (
//       <ParentComponet>
//         <NameStates />
//       </ParentComponet>
//     ),
//   },
//   {
//     path: "/number",
//     element: (
//       <ParentComponet>
//         <ArrayStates />
//       </ParentComponet>
//     ),
//   },
//   {
//     path: "/forms",
//     element: (
//       <ParentComponet>
//         <Form />
//       </ParentComponet>
//     ),
//   },
//   {
//     path: "/fetch",
//     element: (
//       <ParentComponet>
//         <FetchData />
//       </ParentComponet>
//     ),
//   },
//   {
//     path: "/signIn",
//     element: (
//       <ParentComponet>
//         <SignIn />
//       </ParentComponet>
//     ),
//   },
//   {
//     path: "/admin/dash",
//     element: (
//       <ParentComponet>
//         <Dashboard />
//       </ParentComponet>
//     ),
//   },
//   {
//     path: "/admin/books",
//     element: (
//       <ParentComponet>
//         <GetBooks />
//       </ParentComponet>
//     ),
//   },

//   {
//     path: "/admin/create/book",
//     element: (
//       <ParentComponet>
//         <CreateBook />
//       </ParentComponet>
//     ),
//   },
// ]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <MainRoutes />
      </PersistGate>
    </Provider>

    {/* <RouterProvider router={router} /> */}
    {/* <App /> */}
    {/* <States /> */}
    {/* <ArrayStates /> */}
    {/* <NameStates /> */}
  </>
);
