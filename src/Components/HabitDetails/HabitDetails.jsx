import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const HabitDetails = ({ datas }) => {
  const singleData = datas;
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <div className="w-1/3 flex flex-col gap-3 max-lg:w-full justify-center items-center">
            <img
              src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
              className="w-96 rounded-lg "
            />
            <div className="card w-full bg-base-100 card-md shadow-sm">
              <div className="card-body">
                <h2 className="card-title">Product Description</h2>
                <div className="flex justify-between">
                  <p className="font-bold text-purple-700">
                    Condition :{" "}
                    <span className="font-normal text-black">
                      {singleData.condition}
                    </span>
                  </p>
                  <p className="font-bold text-purple-700">
                    Used Time :{" "}
                    <span className="font-normal text-black">
                      {singleData.usage}
                    </span>
                  </p>
                </div>
                <hr />
                <p className="my-4">{singleData.description}</p>
              </div>
            </div>
          </div>
          <div className="w-2/3 max-lg:w-full my-2 ">
            <p className="flex gap-2 items-center">
              <FaArrowRightLong /> Back to Products
            </p>
            <h1 className="card-title text-4xl my-2">{datas.title}</h1>
            <div className="badge badge-outline bg-purple-200 text-purple-700">
              {singleData.category}
            </div>

            <div className="card w-96 bg-base-100 card-md  my-3">
              <div className="card-body">
                <p className="text-green-500 font-bold card-title">
                  ${singleData.price_min}- {singleData.price_max}
                </p>
                <p>Price start from</p>
              </div>
            </div>
            <div className="card w-96 bg-base-100 card-md  my-3">
              <div className="card-body">
                <p className=" font-bold card-title">Product Details</p>
                <p className="font-bold">
                  Product ID :{" "}
                  <span className="font-normal">{singleData._id}</span>
                </p>
                <p className="font-bold">
                  Posted :{" "}
                  <span className="font-normal">{singleData.created_at}</span>
                </p>
              </div>
            </div>
            <div className="card w-96 bg-base-100 card-md  my-3">
              <div className="card-body">
                <p className=" font-bold card-title">Seller Information</p>

                <ul className="list bg-base-100 rounded-box ">
                  <li className="list-row p-0 py-2">
                    <div>
                      <img
                        className="size-10 rounded-box"
                        src="https://img.daisyui.com/images/profile/demo/1@94.webp"
                      />
                    </div>
                    <div>
                      <div>{singleData.seller_name}</div>
                      <div className="text-xs uppercase font-semibold opacity-60">
                        {singleData.email}
                      </div>
                    </div>
                  </li>
                </ul>

                <p className="font-bold">
                  Location :{" "}
                  <span className="font-normal">{singleData.location}</span>
                </p>
                <p className="font-bold">
                  Contact :{" "}
                  <span className="font-normal">
                    {singleData.seller_contact}
                  </span>
                </p>
                <p className="font-bold">
                  Status :{" "}
                  <div className="badge badge-outline bg-yellow-400  ml-2">
                    {singleData.status}
                  </div>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HabitDetails;
