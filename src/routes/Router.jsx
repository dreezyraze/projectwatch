import {createBrowserRouter} from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Login";
import RegisterForm from "../pages/RegisterForm";
import Products from "../components/Products";
import ProductsCardDetails from "../components/ProductsCardDetails";
import ForgotPassword from "../pages/ForgotPassword";
import Wishlist from "@/pages/Wishlist";



export const router = createBrowserRouter([
    {
        path:"/",
        element:<RootLayout/>,
        children:[
            {index:true,element:<Home/>},
            {path:"about",element:<About/>},
            {path:"contact",element:<Contact/>},
            {path:"products",element:<Products />},
            {path:"products/:id",element:<ProductsCardDetails/>},
            { path: "wishlist", element: <Wishlist/> }
        ]
    },
      {
        path:"/auth",
        element:<AuthLayout/>,
        children:[
            
            {path:"login",element:<Login/>},
            {path:"register",element:<RegisterForm/>},
            {path:"forgot-password",element:<ForgotPassword/>}
        ]
    }
])