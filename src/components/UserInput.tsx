import React, { useState } from "react";

const UserInput: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [height, setHeight] = useState<string>("");
  const [collectHeight, setCollectHeight] = useState<string>("");
  const [weight, setWeight] = useState<string>("");
  const [collectWeight, setCollectWeight] = useState<string>("");
  const [calories, setCalories] = useState<number | null>(null);

  //Logic to calculate calorie intake
  const calculateCalories = (e: React.FormEvent) => {
    e.preventDefault();
    let bodyWeight = Number(collectWeight);
    if (weight === "lbs") {
      bodyWeight = bodyWeight / 2.205;
    } else {
      bodyWeight = bodyWeight;
    }

    let calorieIntake;
    if (gender === "male") {
      calorieIntake = bodyWeight * 28.5;
    } else {
      calorieIntake = bodyWeight * 24.5;
    }

    setCalories(calorieIntake);

    //Logger

    const userData = {
      name,
      age: Number(age),
      gender,
      height,
      collectHeight: Number(collectHeight),
      weight,
      collectWeight: Number(collectWeight),
      calories: calorieIntake,
    };
    console.log(userData);
  };

  return (
    <form onSubmit={calculateCalories}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Age:</label>
        <input
          type="number"
          required
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </div>
      <div>
        <label>Gender:</label>
        <select
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          required
        >
          <option value="">Select</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>

      <div>
        <label>Height:</label>
        <select
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          required
        >
          <option value="">Select</option>
          <option value="cm">Centimeters</option>
          <option value="foot">Foot</option>
        </select>
        {height && (
          <input
            type="float"
            value={collectHeight}
            placeholder={`Enter height in ${height}`}
            onChange={(e) => setCollectHeight(e.target.value)}
            required
          />
        )}
      </div>

      <div>
        <label>Body weight:</label>
        <select value={weight} onChange={(e) => setWeight(e.target.value)}>
          <option value="">Select</option>
          <option value="kg">Kilograms</option>
          <option value="lbs">Pounds</option>
        </select>
        {weight && (
          <input
            type="float"
            value={collectWeight}
            placeholder={`Enter weight in ${weight}`}
            onChange={(e) => setCollectWeight(e.target.value)}
            required
          />
        )}
      </div>

      <button type="submit">Submit</button>
      {calories && (
        <div>Estimated Maintenance Calorie Intake: {calories}/ day</div>
      )}
    </form>
  );
};

export default UserInput;
