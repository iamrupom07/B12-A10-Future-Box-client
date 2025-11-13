import React, { useContext, useState } from "react";
import { HabitContext } from "../HabitContext/HabitContext";
import EditHabitModal from "../EditHabitModal";

const MyHabit = () => {
  const { habits, completeHabit, deleteHabit } = useContext(HabitContext);
  const [editingHabit, setEditingHabit] = useState(null);

  const isCompletedToday = (habit) => {
    const today = new Date().toISOString().split("T")[0];
    return habit.completionHistory?.includes(today);
  };

  return (
    <div className="overflow-x-auto p-6">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-100 whitespace-nowrap">
          <tr>
            <th className="px-4 py-4 text-left text-xs font-semibold text-slate-900 uppercase">
              Habit Title
            </th>
            <th className="px-4 py-4 text-left text-xs font-semibold text-slate-900 uppercase">
              Category
            </th>
            <th className="px-4 py-4 text-left text-xs font-semibold text-slate-900 uppercase">
              Reminder Time
            </th>
            <th className="px-4 py-4 text-left text-xs font-semibold text-slate-900 uppercase">
              Streak
            </th>
            <th className="px-4 py-4 text-left text-xs font-semibold text-slate-900 uppercase">
              Status
            </th>
            <th className="px-4 py-4 text-left text-xs font-semibold text-slate-900 uppercase">
              Actions
            </th>
          </tr>
        </thead>

        <tbody className="bg-white divide-y divide-gray-200 whitespace-nowrap">
          {habits.length > 0 ? (
            habits.map((habit) => {
              const streak = habit.completionHistory?.length || 0;
              return (
                <tr key={habit._id}>
                  <td className="px-4 py-4 text-sm text-slate-900 font-medium">
                    {habit.title}
                  </td>
                  <td className="px-4 py-4 text-sm text-slate-600 font-medium">
                    {habit.category}
                  </td>
                  <td className="px-4 py-4 text-sm text-slate-600 font-medium">
                    {habit.reminderTime}
                  </td>
                  <td className="px-4 py-4 text-sm text-slate-600 font-medium">
                    {streak}
                  </td>
                  <td className="px-4 py-4 text-sm font-medium">
                    {isCompletedToday(habit) ? (
                      <span className="text-green-600 font-semibold">
                        Completed ✅
                      </span>
                    ) : (
                      <span className="text-yellow-600 font-semibold">
                        Pending ⏳
                      </span>
                    )}
                  </td>
                  <td className="px-4 py-4 text-sm flex items-center gap-3">
                    <button
                      onClick={() => setEditingHabit(habit)}
                      className="text-blue-600 hover:underline font-medium"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteHabit(habit._id)}
                      className="text-red-600 hover:underline font-medium"
                    >
                      Delete
                    </button>
                    <button
                      onClick={() => completeHabit(habit._id)}
                      disabled={isCompletedToday(habit)}
                      className={`font-medium px-2 py-1 rounded ${
                        isCompletedToday(habit)
                          ? "bg-gray-300 cursor-not-allowed text-white"
                          : "bg-green-600 text-white hover:bg-green-700"
                      }`}
                    >
                      {isCompletedToday(habit) ? "Done" : "Complete"}
                    </button>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td
                colSpan="6"
                className="text-center py-6 text-gray-500 font-medium"
              >
                No habits added yet.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Edit Modal */}
      {editingHabit && (
        <EditHabitModal
          habit={editingHabit}
          onClose={() => setEditingHabit(null)}
        />
      )}
    </div>
  );
};

export default MyHabit;
