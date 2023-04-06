import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Shop from "./components/Shop/Shop";
import About from "./components/about/About";
import Inventory from "./components/inventory/Inventory";
import Order from "./components/order/Order";
import Main from "./layouts/Main";
import { addedProductsCartLoader } from "./loaders/addProductsCartLoader";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        { path: "/", loader: addedProductsCartLoader, element: <Shop /> },
        {
          path: "shop",
          loader: addedProductsCartLoader,
          element: <Shop />,
        },
        { path: "about", element: <About /> },
        { path: "orders", loader: addedProductsCartLoader, element: <Order /> },
        { path: "inventory", element: <Inventory /> },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
