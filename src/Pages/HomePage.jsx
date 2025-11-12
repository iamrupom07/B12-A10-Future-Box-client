import React from "react";
import FeaturedHabits from "../Components/Featured Habits/FeaturedHabits";
import { useLoaderData } from "react-router";
import Carousel from "../Components/Carousel/Carousel";

const HomePage = () => {
  const FeaturedDatas = useLoaderData();
  return (
    <div>
      <div>
        <Carousel></Carousel>
      </div>

      <div>
        <FeaturedHabits FeaturedDatas={FeaturedDatas}></FeaturedHabits>
      </div>
    </div>
  );
};

export default HomePage;
