
import pic1 from "../../assets/Pic1.png";
import { useState } from "react";
import MetricCalc from "./Calcwithmetricunits";
import ImperialCalc from "./Calcwithimperialunits";
const Bodymass = () => {
  const [ImperialOpen, setImperialOpen] = useState(false);
  const [MetricOpen, setMetricOpen] = useState(false);
  const handleImperialOpen = () => {
    setImperialOpen(true);
    setMetricOpen(false);
  };
  const handleMetricOpen = () => {
    setMetricOpen(true);
    setImperialOpen(false);
  };
  return (
    <>
      <div className="w-full h-auto flex flex-col justify-center items-center absolute">
        <div className="w-4/5 h-auto flex flex-col absolute top-[-200px] bg-white rounded-2xl shadow-2xl ">
          <h1 className="text-2xl font-bold text-center py-4  ">
            Enter your details below{" "}
          </h1>
          <div className="w-full h-auto flex flex-col justify-center items-center">
            <div className="w-4/5 h-auto flex py-4 justify-around">
              <div className="flex items-center">
                <input
                  type="radio"
                  name="Metric"
                  value={MetricOpen}
                  onClick={handleMetricOpen}
                  
                  className={` transition ease-in delay-50 w-7 h-7 ring-0 ring-offset-0 text-white bg-white border-gray-500 mr-5 checked:w-5 checked:h-5 checked:text-cyan-700 checked:bg-none checked:bg-cyan-700 checked:ring-[9px] checked:ring-offset-0 checked:ring-cyan-100 ring-opacity-70 duration-250 ${
                    ImperialOpen
                      ? "checked:w-7 checked:h-7 checked:ring-0 checked:ring-offset-0 checked:ring-white checked:text-white checked:bg-white checked:border-gray-500 checked:mr-5"
                      : ""
                  }`}
                />
                <label htmlFor="Metric" className="text-md font-bold ">
                  {" "}
                  Metric{" "}
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  name="Imperial"
                  value={ImperialOpen}
                  onClick={handleImperialOpen}
                  className={` transition ease-in delay-50 w-7 h-7 ring-0 ring-offset-0 text-white bg-white border-gray-500 mr-5 checked:w-5 checked:h-5 checked:text-cyan-700 checked:bg-none checked:bg-cyan-700 checked:ring-[9px] checked:ring-offset-0 checked:ring-cyan-100 ring-opacity-70 duration-250 ${
                    MetricOpen
                      ? "checked:w-7 checked:h-7 checked:ring-0 checked:ring-white checked:ring-offset-0 checked:text-white checked:bg-white checked:border-gray-500 checked:mr-5 "
                      : ""
                  }`}
                />
                <label htmlFor="Imperial" className="text-md font-bold ">
                  {" "}
                  Imperial{" "}
                </label>
              </div>
            </div>
            { ImperialOpen ? <ImperialCalc/> : <MetricCalc/>}
          </div>
        </div>
        <div className="w-full h-4/5 flex flex-col items-center relative">
          <div className="w-full h-4/5 absolute rounded-3xl bg-cyan-50 flex flex-col items-center top-[480px]">
            <img
              src={pic1}
              alt=" a picture!"
              className="w-4/5 h-auto bg-inherit"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Bodymass;

// className=" transition ease-in delay-50 w-7 h-7 ring-0 ring-offset-0 text-white bg-white border-gray-500 mr-5 checked:w-5 checked:h-5 checked:text-cyan-700 checked:bg-none checked:bg-cyan-700 checked:ring-[9px] checked:ring-offset-0 checked:ring-cyan-100 ring-opacity-70 duration-250"


