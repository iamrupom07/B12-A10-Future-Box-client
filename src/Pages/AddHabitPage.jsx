import React, { useState } from "react";
import { AuthContext } from "../Components/AuthContext/AuthContext";
import { toast } from "react-toastify";

const AddHabitPage = () => {
  const { user, loading } = React.useContext(AuthContext);

  const [formData, setFormData] = useState({
    title: "",
    category: "Morning",
    reminderTime: "",
    description: "",
    image: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setSuccess("");

    const newHabit = {
      ...formData,
      creatorName: user?.displayName || "Anonymous",
      creatorEmail: user?.email || "",
      createdAt: new Date().toISOString(),
      completionHistory: [],
    };

    try {
      const res = await fetch("https://habittrackerapi.vercel.app/allhabits", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newHabit),
      });
      const data = await res.json();
      if (data.insertedId) {
        setSuccess("Habit added successfully!");
        toast.success("🎯 Habit added successfully!");

        setFormData({
          title: "",
          category: "Morning",
          reminderTime: "",
          description: "",
          image: "",
        });
      } else {
        setSuccess("Failed to add habit.");
        toast.error("❌ Habit deleted!");
      }
    } catch (error) {
      console.error(error);
      setSuccess("Something went wrong.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-base-200 py-10 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6">Add New Habit</h1>

      <div className="hero-content flex-col justify-center m-auto">
        <div className="bg-base-100 w-full max-w-md shadow-lg rounded-lg">
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              {/* Habit Title */}
              <div className="form-control mb-4">
                <label className="label font-medium">Habit Title</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className="input input-bordered w-full"
                  placeholder="e.g. Morning Walk"
                  required
                />
              </div>

              {/* Category */}
              <div className="form-control mb-4">
                <label className="label font-medium">Category</label>
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
              </div>

              {/* Reminder Time */}
              <div className="form-control mb-4">
                <label className="label font-medium">Reminder Time</label>
                <input
                  type="time"
                  name="reminderTime"
                  value={formData.reminderTime}
                  onChange={handleChange}
                  className="input input-bordered w-full"
                  required
                />
              </div>

              {/* Description */}
              <div className="form-control mb-4">
                <label className="label font-medium">Description</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  className="textarea textarea-bordered w-full"
                  placeholder="Describe your habit..."
                  required
                ></textarea>
              </div>

              {/* Upload Image */}
              <div className="form-control mb-4">
                <label className="label font-medium">
                  Image URL (optional)
                </label>
                <input
                  type="text"
                  name="image"
                  value={formData.image}
                  onChange={handleChange}
                  className="input input-bordered w-full"
                  placeholder="Paste ImgBB URL or leave blank"
                />
              </div>

              {/* User Info */}
              <div className="form-control mb-4">
                <label className="label font-medium">User Name</label>
                <input
                  type="text"
                  readOnly
                  className="input input-bordered w-full bg-gray-100"
                  value={user?.displayName || "Anonymous"}
                />
              </div>

              <div className="form-control mb-4">
                <label className="label font-medium">User Email</label>
                <input
                  type="text"
                  readOnly
                  className="input input-bordered w-full bg-gray-100"
                  value={user?.email || ""}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={submitting || loading}
                className="btn bg-green-700 text-white w-full mt-2"
              >
                {submitting ? "Adding..." : "Add Habit"}
              </button>

              {success && (
                <p className="mt-3 text-center text-green-600 font-medium">
                  {success}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddHabitPage;
