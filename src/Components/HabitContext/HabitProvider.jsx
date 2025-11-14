import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../AuthContext/AuthContext";
import { HabitContext } from "./HabitContext";
import { toast } from "react-toastify";

export const HabitProvider = ({ children }) => {
  const { user } = useContext(AuthContext);
  const [habits, setHabits] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user?.email) fetchHabits();
  }, [user?.email]);

  const fetchHabits = async () => {
    try {
      const res = await fetch(
        `https://habittrackerapi.vercel.app/allhabits?email=${user.email}`
      );
      const data = await res.json();
      setHabits(data);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  const addHabit = async (habit) => {
    try {
      const res = await fetch("https://habittrackerapi.vercel.app/allhabits", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(habit),
      });
      const savedHabit = await res.json();
      setHabits((prev) => [...prev, savedHabit]);
      toast.success("Habit Added Successfully");
    } catch (err) {
      console.error(err);
      toast.error("Failed");
    }
  };

  const updateHabit = async (habitId, updatedData) => {
    try {
      await fetch(`https://habittrackerapi.vercel.app/allhabits/${habitId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedData),
      });

      setHabits((prev) =>
        prev.map((h) => (h._id === habitId ? { ...h, ...updatedData } : h))
      );
      toast.success("Habit Updated Successfull");
    } catch (err) {
      console.error(err);
    }
  };

  const deleteHabit = async (habitId) => {
    try {
      await fetch(`https://habittrackerapi.vercel.app/allhabits/${habitId}`, {
        method: "DELETE",
      });
      setHabits((prev) => prev.filter((h) => h._id !== habitId));
      toast.success("Deleted Successfully");
    } catch (err) {
      console.error(err);
    }
  };

  const completeHabit = async (habitId) => {
    const today = new Date().toISOString().split("T")[0];
    const habit = habits.find((h) => h._id === habitId);
    if (!habit || habit.completionHistory?.includes(today)) return;

    const updatedHistory = [...(habit.completionHistory || []), today];

    await updateHabit(habitId, { completionHistory: updatedHistory });
    toast.success("successful");
  };

  const habitInfo = {
    habits,
    loading,
    fetchHabits,
    addHabit,
    updateHabit,
    deleteHabit,
    completeHabit,
  };

  return (
    <HabitContext.Provider value={habitInfo}>{children}</HabitContext.Provider>
  );
};

export default HabitProvider;
