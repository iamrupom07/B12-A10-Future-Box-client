import React from "react";
import { motion } from "framer-motion"; // ✅ import framer motion
import FeaturedHabits from "../Components/Featured Habits/FeaturedHabits";
import { useLoaderData } from "react-router";
import Carousel from "../Components/Carousel/Carousel";
import FeatureSection from "../Components/FeatureSection/FeatureSection";
import FaqSection from "../Components/FAQ Section/FaqSection";

const HomePage = () => {
  const FeaturedDatas = useLoaderData();

  // Motion variants for animation
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.div
      className="home-page"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={itemVariants}>
        <Carousel />
      </motion.div>

      <motion.div variants={itemVariants} className="mt-10">
        <FeaturedHabits FeaturedDatas={FeaturedDatas} />
      </motion.div>

      <motion.div variants={itemVariants} className="mt-10">
        <FeatureSection />
      </motion.div>

      <motion.div variants={itemVariants} className="mt-10">
        <FaqSection />
      </motion.div>
    </motion.div>
  );
};

export default HomePage;
