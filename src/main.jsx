import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Header from "./components/Header.jsx";
import Landing from "./pages/Landing.jsx";
import About from "./pages/About.jsx";
import Form from "./pages/Form.jsx";
import Loading from "./pages/Loading.jsx";
import ResultGreeting from "./pages/ResultGreeting.jsx";
import Finish from "./pages/Finish.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <App />
      </>
    ),
    children: [
      {
        path: "/",
        element: <Header />,
      },
      {
        path: "/landing",
        element: <Landing />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/form",
        element: <Form />,
      },
      {
        path: "/loading",
        element: <Loading />,
      },
      {
        path: "/result-greeting",
        element: <ResultGreeting />,
      },
      {
        path: "/finish",
        element: <Finish />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
