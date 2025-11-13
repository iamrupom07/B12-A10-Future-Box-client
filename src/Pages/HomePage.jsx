import React from "react";
import FeaturedHabits from "../Components/Featured Habits/FeaturedHabits";
import { useLoaderData } from "react-router";
import Carousel from "../Components/Carousel/Carousel";
import FeatureSection from "../Components/FeatureSection/FeatureSection";
import FaqSection from "../Components/FAQ Section/FaqSection";

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
      <div>
        <FeatureSection></FeatureSection>
      </div>
      <div>
        <FaqSection></FaqSection>
      </div>
    </div>
  );
};

export default HomePage;
