import {Products} from "./pages/Products";
import Login from "./pages/auth/Login";
import {ProductSearch} from "./pages/ProductsSearch";

export const publicRoutes = [
    {
        path: '/login',
        component: Login
    }
]

export const privateRoutes = [
    {
        path: '/products',
        component: Products
    },
    {
        path: '/product-search',
        component: ProductSearch
    }
]