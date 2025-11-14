import React, { useState, useContext } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { HabitContext } from "../HabitContext/HabitContext";
import { toast } from "react-toastify";

const HabitDetails = ({ datas }) => {
  const [habit, setHabit] = useState(datas);
  const [loading, setLoading] = useState(false);
  const { completeHabit } = useContext(HabitContext);

  const isCompletedToday = () => {
    const today = new Date().toISOString().split("T")[0]; // YYYY-MM-DD
    return habit?.completionHistory?.includes(today);
  };

  const handleComplete = async () => {
    if (isCompletedToday()) return;

    setLoading(true);

    try {
      // Call the global completeHabit function
      await completeHabit(habit._id);

      // Update local habit state to reflect in detail page
      const today = new Date().toISOString().split("T")[0];
      setHabit((prev) => ({
        ...prev,
        completionHistory: [...(prev.completionHistory || []), today],
      }));
      toast.success("Habit completed");
    } catch (err) {
      console.error(err);
      toast.error("Error marking habit complete");
    } finally {
      setLoading(false);
    }
  };

  if (!habit) {
    return (
      <div className="min-h-screen flex justify-center items-center text-gray-500">
        Loading habit details...
      </div>
    );
  }

  return (
    <div className="p-6 bg-base-200 min-h-screen flex items-center">
      <div className="lg:max-w-5xl mx-auto">
        {/* Header / Back */}
        <button
          onClick={() => window.history.back()}
          className="flex items-center gap-2 text-blue-600 hover:underline mb-6"
        >
          <FaArrowLeftLong /> Back to Habits
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Left: Habit Image */}
          <div className="aspect-[308/213]">
            <img
              src={
                habit?.image ||
                "https://via.placeholder.com/600x400?text=No+Image+Available"
              }
              alt={habit?.title || "Habit"}
              className="object-cover w-full h-full rounded-xl shadow-md"
            />
          </div>

          {/* Right: Habit Details */}
          <div>
            <h2 className="text-4xl font-bold text-green-700 mb-3">
              {habit?.title}
            </h2>
            <p className="text-gray-700 mb-5 leading-relaxed">
              {habit?.description}
            </p>

            {/* Meta Info */}
            <div className="space-y-2 mb-6">
              <p>
                <strong>Category:</strong>{" "}
                <span className="text-green-600 font-medium">
                  {habit?.category}
                </span>
              </p>
              <p>
                <strong>Reminder Time:</strong>{" "}
                <span className="text-blue-600">{habit?.reminderTime}</span>
              </p>
              <p>
                <strong>Created By:</strong> {habit?.creatorName} (
                {habit?.creatorEmail})
              </p>
              <p>
                <strong>Created At:</strong>{" "}
                {new Date(habit?.createdAt).toLocaleString()}
              </p>
            </div>

            {/* Completion History */}
            <div className="bg-white rounded-lg shadow p-4 mb-6">
              <h3 className="font-semibold text-lg mb-2 text-green-700">
                Completion History
              </h3>
              {habit?.completionHistory?.length > 0 ? (
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  {habit.completionHistory.map((date, index) => (
                    <li key={index}>
                      {new Date(date).toLocaleDateString("en-GB")}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-500 italic">Not completed yet</p>
              )}
            </div>

            {/* Complete Button */}
            <button
              onClick={handleComplete}
              disabled={isCompletedToday() || loading}
              className={`px-4 py-2 rounded font-medium ${
                isCompletedToday()
                  ? "bg-gray-300 cursor-not-allowed text-white"
                  : "bg-green-600 text-white hover:bg-green-700"
              }`}
            >
              {isCompletedToday()
                ? "Completed ✅"
                : loading
                ? "Completing..."
                : "Complete Habit"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HabitDetails;
