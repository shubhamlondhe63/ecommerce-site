import React from 'react';
import './App.css';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: ( <Home/> ),
  },
  {
    path: "/login",
    element: ( <LoginPage/>),
  },

  {
    path: "/signup",
    element: ( <SignupPage/>),
  },
]);

// createRoot(document.getElementById("root")).render(
//   <RouterProvider router={router} />
// );



function App() {
  return (
    <div className="App">
        {/* <Home/> */}
        {/* <LoginPage/> */}
        {/* <SignupPage/> */}

        <RouterProvider router={router} />
    </div>
  );
}

export default App;
