import React from "react";

interface UserInputProps {
  calories: number | null;
}

const Calories: React.FC<UserInputProps> = ({ calories }) => {
  return (
    <div>
      <h2>{calories}</h2>
    </div>
  );
};

export default Calories;
