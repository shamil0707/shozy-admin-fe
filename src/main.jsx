import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./pages/Root";
import Home from "./pages/Home";
import ProductForm from "./pages/ProductForm";


import ProductList from "./components/ProductList";
import AddCategoryForm from "./components/AddCategoryForm/AddCategoryForm";
import ProductsCategory from "./components/AddCategoryForm/ProductsCategory";
import CategoryList from "./components/CategoryList";
import UsersList from "./components/UsersList";
import LoginPage from "./pages/LoginPage";


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root/>,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/add-product',
        element: <ProductForm />
      },
      {
        path: '/add-category',
        element: <AddCategoryForm />
      },
      {
        path: '/category/:categoryId',
        element: <ProductsCategory />
      },
      {
        path: '/productList',
        element: <ProductList />
      },
      {
        path:'/categoryList',
        element:<CategoryList/>
      },
      {
        path:'/users',
        element:<UsersList/>
      },
      {
        path: '/login',
        element: <LoginPage/>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
