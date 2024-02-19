import { useState, useEffect } from "react";
import BMIresult from "./BMIresult/BMIresult";
const MetricCalc = () => {
  const [heightValue, setHeightValue] = useState("");
  const [weightValue, setWeightValue] = useState("");
  const [bmiValue, setBmiValue] = useState(0);
  const [bmiMessage, setBmiMessage] = useState(
    "Enter your height and weight , you will see your BMI result here"
  );
  const [title, setTitle] = useState("Welcome!");
  useEffect(() => {
    const heightInMeters = heightValue / 100;
    const bmi = (weightValue / (heightInMeters * heightInMeters)).toFixed(2);
    setBmiValue(bmi);
    let message = "";
    let title = "";
    if (heightValue && weightValue) {
      if (bmi < 18.5) {
        title = "Your BMI is...";
        message = "you are Underweight";
      } else if (bmi >= 18.5 && bmi < 25) {
        title = "Your BMI is...";
        message = "You are Normal weight";
      } else if (bmi >= 25 && bmi < 30) {
        title = "Your BMI is...";
        message = "You are Overweight";
      } else if (bmi > 30) {
        title = "Your BMI is...";
        message = "You are Obese";
      }
      setBmiMessage(message);
      setTitle(title);
    } else {
      setTitle("Welcome!");
      setBmiValue("");
      setBmiMessage(
        "Enter your height and weight , you will see your BMI result here"
      );
    }
  });
  return (
    <>
      <div className="w-full h-auto flex flex-wrap items-center justify-center lg:w-full lg:h-auto lg:flex lg:flex-wrap-reverse lg:justify-around">
        <div className="w-4/5 h-auto flex flex-col relative lg:w-5/12 ">
          <label htmlFor="Height" className="pb-2 text-gray-600 ">
            {" "}
            Height{" "}
          </label>
          <input
            type="number"
            name="Height"
            placeholder="0"
            
            value={heightValue}
            onChange={(e) => setHeightValue(e.target.value)}
            className="rounded-lg h-16 outline-none border-gray-300 focus:border-gray-300 focus:ring-0 pl-6 py-4 text-2xl font-bold"
          />
          <p className="absolute right-5 top-11 text-2xl font-bold text-cyan-800">
            cm
          </p>
        </div>
        <div className="w-4/5 h-auto flex flex-col relative lg:w-5/12 ">
          <label htmlFor="Weight" className="pb-2 text-gray-600">
            {" "}
            Weight{" "}
          </label>
          <input
            type="number"
            name="Weight"
            placeholder="0"
            
            value={weightValue}
            onChange={(e) => setWeightValue(e.target.value)}
            className="rounded-lg h-16 outline-none border-gray-300 focus:border-gray-300 focus:ring-0 pl-6 py-4 text-2xl font-bold"
          />
          <p className="absolute right-5 top-11 text-2xl font-bold text-cyan-800">
            kg
          </p>
        </div>
      </div>
      <BMIresult title={title} content={bmiMessage} result={bmiValue} />
    </>
  );
};

export default MetricCalc;


{/* <style>
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button{
    -webkit-appearance:none;
    margin:0;
  }
  input[type=number]{
    -moz-appearance:textfield
  }



</style> */}