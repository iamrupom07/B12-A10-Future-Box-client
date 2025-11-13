import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../AuthContext/AuthContext";
import { HabitContext } from "./HabitContext";

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
        `https://b12-a10-future-box-server-brown.vercel.app/allhabits?email=${user.email}`
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
      const res = await fetch(
        "https://b12-a10-future-box-server-brown.vercel.app/allhabits",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(habit),
        }
      );
      const savedHabit = await res.json();
      setHabits((prev) => [...prev, savedHabit]); // Real-time update
    } catch (err) {
      console.error(err);
    }
  };

  const updateHabit = async (habitId, updatedData) => {
    try {
      const res = await fetch(
        `https://b12-a10-future-box-server-brown.vercel.app/allhabits/${habitId}`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(updatedData),
        }
      );
      const updatedHabit = await res.json();
      setHabits((prev) =>
        prev.map((h) => (h._id === habitId ? updatedHabit : h))
      );
    } catch (err) {
      console.error(err);
    }
  };

  const deleteHabit = async (habitId) => {
    try {
      await fetch(
        `https://b12-a10-future-box-server-brown.vercel.app/allhabits/${habitId}`,
        {
          method: "DELETE",
        }
      );
      setHabits((prev) => prev.filter((h) => h._id !== habitId));
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
