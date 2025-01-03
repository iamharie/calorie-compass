import React, { useState } from "react";
import Calories from "./Calories";
import Macros from "./Macros";

const UserInput: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<number | "">("");
  const [gender, setGender] = useState<string>("");
  const [height, setHeight] = useState<string>("");
  const [collectHeight, setCollectHeight] = useState<string>("");
  const [weight, setWeight] = useState<string>("");
  const [collectWeight, setCollectWeight] = useState<string>("");
  const [calories, setCalories] = useState<number | null>(null);
  const [submittedName, setSubmittedName] = useState<string>("");

  const convertToKgs = (collectWeight: number, weight: string): number => {
    return weight === "lbs" ? collectWeight / 2.205 : Number(collectWeight);
  };

  //Logic to calculate calorie intake
  const calculateCalories = (e: React.FormEvent) => {
    e.preventDefault();
    let bodyWeight = Number(collectWeight);
    if (weight === "lbs") {
      bodyWeight = Number(bodyWeight) / 2.205;
    }

    const weightInKgs = convertToKgs(Number(collectWeight), weight);

    let calorieIntake =
      gender === "male" ? weightInKgs * 28.5 : weightInKgs * 24.5;
    calorieIntake = parseFloat(calorieIntake.toFixed(0));
    setCalories(calorieIntake);

    //Logger

    const userData = {
      name,
      age,
      gender,
      height,
      collectHeight,
      weight,
      collectWeight,
      calories: calorieIntake,
    };

    console.log(userData);
    // Send data to Firebase
    fetch("https://etezazi-industries-default-rtdb.firebaseio.com/data.json", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    setSubmittedName(name);
    //Reset form
    setName("");
    setAge("");
    setGender("");
    setHeight("");
    setCollectHeight("");
    setWeight("");
  };

  return (
    <>
      <form
        onSubmit={calculateCalories}
        className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md m-10"
      >
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Name:
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Age:
          </label>
          <input
            type="number"
            required
            value={age}
            onChange={(e) => setAge(Number(e.target.value))}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Gender:
          </label>
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Height:
          </label>
          <select
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            // required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-2"
            />
          )}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Body weight:
          </label>
          <select
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
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
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-2"
            />
          )}
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </form>
      {calories && (
        <div className="mt-4">
          <Calories calories={calories} name={submittedName} />
          <Macros
            // calories={calories}
            bodyWeight={convertToKgs(Number(collectWeight), weight)}
          />
        </div>
      )}
    </>
  );
};

export default UserInput;
