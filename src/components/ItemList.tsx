/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import { GetProduct, ProductService } from "../services/ecommerce-services";
import List from "./List";

interface response {
  results: Array<GetProduct>;
}

const ItemList = () => {
  const [data, setData] = useState<response>();
  const response = async () => {
    const data = await ProductService.productListList();
    setData(data);
  };

  console.log(data?.results);

  useEffect(() => {
    response();
  }, []);

  return (
    <div className="grid grid-cols-4">
      {data?.results?.map((item: GetProduct, index: number) => {
        return (
          <>
            <List
              key={index}
              name={item.Name}
              description={item.Description}
              productType={item.Product_Type && item.Product_Type}
            />
          </>
        );
      })}
    </div>
  );
};

export default ItemList;
