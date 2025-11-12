import React from "react";
import AllHabits from "../Components/AllHabits/AllHabits";
import { useLoaderData } from "react-router";

const AllHabitPage = () => {
  const datas = useLoaderData();
  console.log(datas);
  return (
    <div>
      <AllHabits datas={datas}></AllHabits>
    </div>
  );
};

export default AllHabitPage;
