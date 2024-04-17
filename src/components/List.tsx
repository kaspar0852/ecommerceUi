import React from "react";
import { ProductProductType } from "../services/ecommerce-services";

interface IProps {
  name: string;
  description: string;
  productType?: ProductProductType;
}

const List = ({ name, description, productType }: IProps) => {
  return (
    <>
      {/* <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <a className="block relative h-48 rounded overflow-hidden">
              <img
                alt="ecommerce"
                className="object-cover object-center w-full h-full block"
                src="https://dummyimage.com/420x260"
              />
            </a>
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                {name}
              </h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">
                {description}
              </h2>
              <p className="mt-1">{productType?.Name}</p>
            </div>
          </div>
        </div>
      </div> */}
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
            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
              {name}
            </h3>
            <h2 className="text-gray-900 title-font text-lg font-medium">
              {description}
            </h2>
            <div className="flex justify-between">
              <p className="mt-1">{productType?.Name}</p>
              <button className="inline-flex items-center bg-indigo-500 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-400 rounded text-base text-white mt-4 md:mt-0">
                Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default List;
