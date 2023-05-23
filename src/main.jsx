import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Header from "./components/Header.jsx";
import Landing from "./pages/Landing.jsx";
import About from "./pages/About.jsx";
import TaskOne from "./pages/TaskOne.jsx";
import TaskTwo from "./pages/TaskTwo.jsx";
import TaskThree from "./pages/TaskThree.jsx";
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
        path: "/",
        element: <Landing />,
      },
      {
        path: "/",
        element: <About />,
      },
      {
        path: "/",
        element: <TaskOne />,
      },
      {
        path: "/",
        element: <TaskTwo />,
      },
      {
        path: "/",
        element: <TaskThree />,
      },
      {
        path: "/",
        element: <Finish />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
