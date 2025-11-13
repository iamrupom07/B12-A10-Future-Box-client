import React, { useState } from "react";

const CompleteHabitModal = ({ onComplete }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCompleteClick = () => {
    if (onComplete) onComplete(); // trigger complete action (API call)
    setIsOpen(false); // close modal
  };

  return (
    <div>
      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 p-4 flex justify-center items-center w-full h-full z-[1000] overflow-auto before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)]">
          <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6 relative">
            <svg
              onClick={() => setIsOpen(false)}
              xmlns="http://www.w3.org/2000/svg"
              className="w-3.5 h-3.5 cursor-pointer shrink-0 fill-gray-400 hover:fill-red-500 float-right"
              viewBox="0 0 320.591 320.591"
            >
              <path d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z" />
              <path d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z" />
            </svg>

            <div className="my-8 text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-14 fill-green-500 inline"
                viewBox="0 0 24 24"
              >
                <path d="M20.285 6.709a1 1 0 0 0-1.414-1.414L9 15.166l-4.871-4.871a1 1 0 0 0-1.414 1.414l5.578 5.578a1 1 0 0 0 1.414 0l10.578-10.578z" />
              </svg>
              <div className="mt-6">
                <h4 className="text-slate-900 text-lg font-semibold">
                  Mark this habit as complete today?
                </h4>
                <p className="text-sm text-slate-600 mt-3">
                  Once you mark it complete, it will be recorded for today.
                </p>
              </div>
            </div>

            <div className="flex flex-col space-y-3">
              <button
                onClick={handleCompleteClick}
                type="button"
                className="px-4 py-2 rounded-md cursor-pointer text-white text-sm font-medium tracking-wide bg-green-600 hover:bg-green-700 active:bg-green-600"
              >
                Complete
              </button>
              <button
                onClick={() => setIsOpen(false)}
                type="button"
                className="px-4 py-2 rounded-md cursor-pointer text-slate-900 text-sm font-medium tracking-wide bg-gray-200 hover:bg-gray-300 active:bg-gray-200"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Open Modal Button */}
      <button
        onClick={() => setIsOpen(true)}
        type="button"
        className="mt-4  block px-4 py-2 rounded-md text-white text-sm font-medium bg-blue-600 hover:bg-blue-700 active:bg-blue-600"
      >
        Complete Habit
      </button>
    </div>
  );
};

export default CompleteHabitModal;
