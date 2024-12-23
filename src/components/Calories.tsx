import React from "react";

interface UserInputProps {
  calories: number | null;
}

const Calories: React.FC<UserInputProps> = ({ calories }) => {
  return (
    <div className="flex flex-col justify-center items-center h-full">
      <p className="text-lg text-gray-600">Estimated maintenance calories</p>
      <h2 className="text-2xl font-bold text-gray-800">
        {calories ? `${calories} / day` : "N/A"}
      </h2>
    </div>
  );
};

export default Calories;
