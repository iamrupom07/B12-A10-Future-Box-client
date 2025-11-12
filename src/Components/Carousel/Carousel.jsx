// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "../../App.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import { Link } from "react-router";

const Carousel = () => {
  return (
    <>
      <div className="my-2">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          <SwiperSlide>
            <div className="hero bg-base-200 p-14 bg-[linear-gradient(to_right,#C7FEE8_0%,#E9FFE0_100%)] text-gray-800">
              <div className="hero-content text-center">
                <div className="max-w-md">
                  <h1 className="text-5xl font-bold">
                    Start Your First Streak Today
                  </h1>
                  <p className="py-6">
                    Turn small daily actions into massive long-term success.
                    Consistency is your key to growth.
                  </p>
                  <Link to={"/addhabit"}>
                    <button className="btn bg-black text-white">
                      Create a New Habit
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="hero bg-base-200 p-14 bg-[linear-gradient(to_right,#E0F8F5_0%,#E6F9FF_100%)] text-gray-800">
              <div className="hero-content text-center">
                <div className="max-w-md">
                  <h1 className="text-5xl font-bold">
                    Discover Habits That Stick
                  </h1>
                  <p className="py-6">
                    Browse public habits shared by the community and find
                    inspiration for your personal routine.
                  </p>
                  <button className="btn bg-black text-white">
                    Explore Public Habits
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="hero bg-base-200 p-14 bg-[linear-gradient(to_right,#F2FFD1_0%,#EDFFC9_100%)] text-gray-800">
              <div className="hero-content text-center">
                <div className="max-w-md">
                  <h1 className="text-5xl font-bold">
                    Track, Analyze, and Succeed
                  </h1>
                  <p className="py-6">
                    Visualize your progress and watch your motivation climb. The
                    longer the streak, the stronger the habit.
                  </p>
                  <button className="btn bg-black text-white">
                    View My Dashboard
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Carousel;
