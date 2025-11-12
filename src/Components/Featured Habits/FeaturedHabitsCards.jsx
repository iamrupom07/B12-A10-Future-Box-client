import React from "react";
import { Link } from "react-router";

const FeaturedHabitsCards = ({ myFeaturedHabit }) => {
  const newHabitCards = myFeaturedHabit;
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
          <h2 className="card-title">{newHabitCards.title}</h2>
          <div className="flex justify-between">
            <p className="font-bold text-green-700">
              Reminder Time :{" "}
              <span className="font-normal text-black">
                {newHabitCards.reminderTime}
              </span>
            </p>
            <div className="badge badge-outline bg-green-200 ">
              {newHabitCards.category}
            </div>
          </div>

          <div className="">
            <Link to={`/habitdetails/${newHabitCards._id}`}>
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

export default FeaturedHabitsCards;
