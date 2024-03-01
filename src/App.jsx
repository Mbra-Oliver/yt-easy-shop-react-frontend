import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/HomePage";
import RootLayout from "./components/Layouts/RootLayout";
import ProductsPage from "./pages/products/ProductsPage";
import ProductDetailsPage from "./pages/products/ProductDetailsPage";

import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { checkUserAuthLoader, tokenLoader } from "./loaders/auth-loader";

//Initialisation des routes

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    loader: tokenLoader,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/products",
        children: [
          {
            index: true,
            element: <ProductsPage />,
          },

          {
            path: ":id",
            element: <ProductDetailsPage />,
          },
        ],
      },

      {
        path: "/login",
        element: <Login />,
        loader: checkUserAuthLoader,
      },
      {
        path: "/register",
        element: <Register />,
        loader: checkUserAuthLoader,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  );
}

export default App;
