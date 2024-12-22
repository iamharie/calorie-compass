import React, { useState } from "react";

const UserInput: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [height, setHeight] = useState<string>("");
  const [collectHeight, setCollectHeight] = useState<string>("");
  const [weight, setWeight] = useState("");
  const [collectWeight, setCollectWeight] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const userData = {
      name,
      age: Number(age),
      gender,
      height,
      collectHeight: Number(collectHeight),
      weight,
      collectWeight: Number(collectWeight),
    };
    console.log(userData);
  };

  return (
    <form onSubmit={handleSubmit}>
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
          <option value="other">Other</option>
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
    </form>
  );
};

export default UserInput;
