import React from "react";
import { Link } from "react-router";

const Card = ({ data }) => {
  const allhabitsdata = data;

  return (
    <div className="">
      <div className="card bg-base-100 aspect-3/2  shadow-sm">
        <figure className="px-6 pt-6">
          <img
            src="https://i.ibb.co.com/bgDVSdcd/thumbnail-card.png"
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body  ">
          <h2 className="card-title">{allhabitsdata.title}</h2>
          <div className="flex justify-between">
            <p className="font-bold text-green-700">
              Reminder Time :{" "}
              <span className="font-normal text-black">
                {allhabitsdata.reminderTime}
              </span>
            </p>
            <div className="badge badge-outline bg-green-200 ">
              {allhabitsdata.category}
            </div>
          </div>

          <div className="">
            <Link to={`/habitdetails/${allhabitsdata._id}`}>
              <button className="btn btn-neutral btn-outline w-full">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
