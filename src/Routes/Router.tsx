import ItemList from "../components/ItemList";
import { Outlet, Route } from "react-router-dom";

const Router = () => {
  return (
    <div>
      <Route path={"/"} element={<ItemList />} />
      <Outlet />
    </div>
  );
};

export default Router;
