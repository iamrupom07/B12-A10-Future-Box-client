import React from "react";

import Card from "../HabitsCard/Card";

const AllHabits = ({ datas }) => {
  const allDatas = datas;
  console.log(allDatas);
  return (
    <div>
      <div className="my-12">
        <h3 className="text-center text-4xl font-bold my-6">All Habits</h3>
        <div className="grid grid-cols-4 max-2xl:grid-cols-3 gap-6 max-lg:grid-cols-2 max-sm:grid-cols-1">
          {allDatas.map((data) => {
            return <Card data={data}></Card>;
          })}
        </div>
        <div className="flex justify-center py-6 my-6">
          <button className="btn btn-outline btn-primary">See All</button>
        </div>
      </div>
    </div>
  );
};

export default AllHabits;
