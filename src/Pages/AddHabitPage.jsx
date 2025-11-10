import React from "react";
import { NavLink } from "react-router";

const AddHabitPage = () => {
  return (
    <div>
      <div className="bg-base-200 py-8 my-4">
        <p className="text-3xl font-bold text-center">Add Habit</p>{" "}
        <div className="">
          <div className="hero-content flex-col justify-center m-auto">
            <div className=" bg-base-100 w-full max-w-sm shadow-xl mx-auto">
              <div className="card-body">
                <form>
                  <fieldset className="fieldset">
                    <label className="label">Habit Title</label>
                    <input
                      type="text"
                      className="input input-bordered w-full"
                      placeholder="Enter Title"
                      name="name"
                    />{" "}
                    <label className="label">Category</label>
                    <select name="" id="">
                      <option value="Morning">Morning</option>
                      <option value="Work">Work</option>
                      <option value="Fitness">Fitness</option>
                      <option value="Study">Study</option>
                    </select>
                    <label className="label">Description</label>
                    <textarea
                      type="textarea"
                      className="input input-bordered w-full"
                      placeholder=""
                      name="photo"
                    />{" "}
                    <button className="btn bg-green-700 text-white mt-4 w-full">
                      Add Habit
                    </button>{" "}
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddHabitPage;
