import React from "react";
import FeaturedHabitsCards from "./FeaturedHabitsCards";
import { Link } from "react-router";

const FeaturedHabits = ({ FeaturedDatas }) => {
  const myFeaturedHabits = FeaturedDatas;
  return (
    <div>
      <div className="my-12">
        <h3 className="text-center text-4xl font-bold my-6">Featured Habits</h3>
        <div className="grid grid-cols-4 max-2xl:grid-cols-3 gap-6 max-lg:grid-cols-2 max-sm:grid-cols-1">
          {myFeaturedHabits.map((myFeaturedHabit) => {
            return (
              <FeaturedHabitsCards
                myFeaturedHabit={myFeaturedHabit}
              ></FeaturedHabitsCards>
            );
          })}
        </div>
        <div className="flex justify-center py-6 my-6">
          <Link to={"/allhabits"}>
            <button className="btn btn-outline btn-primary">See All</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedHabits;
