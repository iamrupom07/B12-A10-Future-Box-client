import React from "react";
import { useLoaderData } from "react-router";
import HabitDetails from "../Components/HabitDetails/HabitDetails";

const HabitDetailsPage = () => {
  const datas = useLoaderData();
  return (
    <div>
      <HabitDetails datas={datas}></HabitDetails>
    </div>
  );
};

export default HabitDetailsPage;
