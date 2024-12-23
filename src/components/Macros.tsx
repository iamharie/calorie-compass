import { GiChickenOven, GiBowlOfRice } from "react-icons/gi";
import { BiCheese } from "react-icons/bi";

interface MacrosProps {
  calories: number;
  bodyWeight: number;
}

const Macros: React.FC<MacrosProps> = ({ calories, bodyWeight }) => {
  //Calculate marcos breakdown
  const proteinPerKg = 2;
  const fatPerKg = 0.5;
  const carbPerKg = 4;

  console.log(bodyWeight);
  // Calculate grams based on body weight
  const proteinGrams = bodyWeight * proteinPerKg;
  const fatGrams = bodyWeight * fatPerKg;
  const carbGrams = bodyWeight * carbPerKg;

  // Convert grams to calories
  const proteinCalories = proteinGrams * 4;
  const fatCalories = fatGrams * 9;
  const carbCalories = carbGrams * 4;

  // Validate total calorie alignment
  const totalCalculatedCalories = proteinCalories + fatCalories + carbCalories;
  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md md:p-6 lg:p-8 text-center mt-5">
      <h3 className="text-xl font-semibold mb-2 md:text-2xl lg:text-3xl">
        Macros Breakdown
      </h3>
      <p className="text-gray-600 mb-1 md:mb-2 lg:mb-3">Work in progress 🚧</p>
      <div className="flex flex-col md:flex-row md:justify-between">
        <div className="flex flex-col items-center mb-2 md:mb-0">
          <span className="mb-1">
            <GiChickenOven />
          </span>
          <p className="text-gray-800">
            <p>Protein: x grams y %</p>
            {/* Protein: {proteinGrams.toFixed(2)}g grams (
            {((proteinCalories / calories) * 100).toFixed(2)}%) */}
          </p>
        </div>
        <div className="flex flex-col items-center mb-2 md:mb-0">
          <span className="mb-1">
            <GiBowlOfRice />
          </span>
          <p className="text-gray-800">
            <p>Carbohydrates: x grams y %</p>
            {/* Carbohydrates: {carbGrams.toFixed(2)} grams (
            {((carbCalories / totalCalculatedCalories) * 100).toFixed(2)}%) */}
          </p>
        </div>
        <div className="flex flex-col items-center">
          <span className="mb-1">
            <BiCheese />
          </span>
          <p className="text-gray-800">
            <p>Fats: x grams y %</p>
            {/* Fats: {fatGrams.toFixed(2)} grams (
            {((fatCalories / totalCalculatedCalories) * 100).toFixed(2)}%) */}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Macros;
