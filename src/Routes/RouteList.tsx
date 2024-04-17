import ItemList from "../components/ItemList";
import ProductDetailView from "../components/ProductDetailView";

export const routes = [
  {
    path: "/",
    exact: true,
    element: ItemList,
  },
  {
    path: "/ProductList/",
    exact: true,
    element: ProductDetailView,
  },
];
