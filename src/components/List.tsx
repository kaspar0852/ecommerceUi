import React from "react";
import { ProductProductType } from "../services/ecommerce-services";
import { Link } from "react-router-dom";

interface IProps {
  id?: number;
  name: string;
  description: string;
  productType?: ProductProductType;
}

const List = ({ id,name, description, productType }: IProps) => {
  return (
    <>
      <div>
        <div className="p-4">
          <a className="block relative h-48 rounded overflow-hidden">
            <img
              alt="ecommerce"
              className="object-cover object-center w-full h-full block"
              src="https://dummyimage.com/420x260"
            />
          </a>
          <div className="mt-4">
            <h3 className="text-black-900 text-xs tracking-widest title-font mb-1 font-bold">
              {name}
            </h3>
            <h2 className="text-gray-600 title-font text-lg font-medium">
              {description.length > 100 ? `${description.substring(0, 100)}...` : description}
            </h2>
            <div className="flex justify-between">
              <p className="text-gray-800 title-font text-lg font-medium">{productType?.Name}</p>
              <Link to={`/product/${id}`}>
                <button className="inline-flex items-center bg-indigo-500 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-400 rounded text-base text-white mt-4 md:mt-0">
                  Details
                </button>
              </Link>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default List;
