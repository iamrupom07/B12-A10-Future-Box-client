import React, { useState, useContext, useEffect } from "react";
import { HabitContext } from "./HabitContext/HabitContext";

const EditHabitModal = ({ habit, onClose }) => {
  const { fetchHabits } = useContext(HabitContext);
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    reminderTime: "",
    description: "",
    image: "",
  });

  useEffect(() => {
    if (habit) {
      setFormData({
        title: habit.title || "",
        category: habit.category || "",
        reminderTime: habit.reminderTime || "",
        description: habit.description || "",
        image: habit.image || "",
      });
    }
  }, [habit]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch(`https://habittrackerapi.vercel.app/allhabits/${habit._id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    fetchHabits(); // update context
    onClose(); // close modal
  };

  if (!habit) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg max-w-md w-full">
        <h2 className="text-xl font-bold mb-4">Edit Habit</h2>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Habit Title"
            className="input input-bordered w-full"
            required
          />
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="select select-bordered w-full"
          >
            <option value="Morning">Morning</option>
            <option value="Work">Work</option>
            <option value="Fitness">Fitness</option>
            <option value="Evening">Evening</option>
            <option value="Study">Study</option>
          </select>
          <input
            type="time"
            name="reminderTime"
            value={formData.reminderTime}
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Description"
            className="textarea textarea-bordered w-full"
            required
          />
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            placeholder="Image URL"
            className="input input-bordered w-full"
          />
          <div className="flex justify-end gap-2 mt-4">
            <button type="button" onClick={onClose} className="btn btn-outline">
              Cancel
            </button>
            <button type="submit" className="btn btn-primary">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditHabitModal;
