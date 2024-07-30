import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./components/home/Home.jsx";
import About from "./components/about/About.jsx";
import Contact from "./components/contact/Contact.jsx";
import Htmlquiz from "./components/html/Htmlquiz.jsx";
import Cssquiz from "./components/css/Cssquiz.jsx";
import Service from "./components/services/Service.jsx";
import Jsquiz from "./components/jsquiz/Jsquiz.jsx";
import Winner from "./components/winner/Winner.jsx";
import User from "./components/User/User.jsx";

// const router = createBrowserRouter([
//   {
//     path:'/',
//     element:<Layout />,
//     children:[
//       {
//         path:"",
//         element: <Home />
//       },
//       {
//         path:"about",
//         element:<About />
//       },
//       {
//         path:"contact",
//         element:<Contact />
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="htmlquiz" element={<Htmlquiz />} />
      <Route path="cssquiz" element={<Cssquiz />} />
      <Route path="service" element={<Service />} />
      <Route path="jsquiz" element={<Jsquiz />} />
      <Route path="winner" element={<Winner />} />
      <Route path="user/:userid" element={<User />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
