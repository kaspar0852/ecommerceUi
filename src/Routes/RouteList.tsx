import DetailView from "../components/DetailView";
import ItemList from "../components/ItemList";
import Login from "../components/LoginForm";
import Register from "../components/RegisterFrom";

export const routes = [
  {
    path: "/",
    exact: true,
    element: ItemList,
  },
  {
    path: "/product/:id",
    exact: true,
    element: DetailView,
  },
  {
    path:"/login",
    exact: true,
    element: Login
  },
  {
    path:"/register",
    exact: true,
    element: Register
  }
];
