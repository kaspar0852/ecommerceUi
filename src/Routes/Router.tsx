import ItemDetail from "../components/DetailView";
import ItemList from "../components/ItemList";
import { Outlet, Route } from "react-router-dom";

const Router = () => {
  return (
    <div>
      <Route path={"/"} element={<ItemList />} />
      <Route path={"product/:id"} element={<ItemDetail/>}/>
      {/* <Route path={"/login"} element={<Login />} />
      <Route path={"/register"} element={<Register />} /> */}
      <Route path={"product/:id"} element={<ItemDetail/>}/>
      <Outlet />
    </div>
  );
};

export default Router;
