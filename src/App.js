import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Orders from "./components/Orders/Orders";
import Main from "./layouts/Main";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        { path: "/", loader: () => fetch("tshirts.json"), element: <Home /> },
        {
          path: "home",
          loader: () => fetch("tshirts.json"),
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        { path: "orders", element: <Orders /> },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
