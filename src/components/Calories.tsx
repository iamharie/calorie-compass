import React from "react";

interface UserInputProps {
  calories: number | null;
  name: string;
}

const Calories: React.FC<UserInputProps> = ({ calories, name }) => {
  return (
    <div className="flex flex-col justify-center items-center h-full m-10">
      <p className="text-lg text-gray-600">
        {name}'s Estimated maintenance calories
      </p>
      <h2 className="text-2xl font-bold text-gray-800">
        {calories ? `${calories} / day` : "N/A"}
      </h2>
    </div>
  );
};

export default Calories;
