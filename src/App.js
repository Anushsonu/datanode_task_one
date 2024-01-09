import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Body from "./components/Body";
import ContactUs from "./components/ContactUs";
import Services from "./components/Services";
import { useState } from "react";
// import Body from "../src/components/Body";

function App() {
  const [myName, setName] = useState("Anush");
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <Home name={myName} />,
        },
        {
          path: "/contact",
          element: <ContactUs name={myName} />,
        },
        {
          path: "/services",
          element: <Services name={myName} />,
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
