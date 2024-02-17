import Suggest from "./Suggest";
import { PiBowlFoodLight } from "react-icons/pi";
import {GiGymBag} from "react-icons/gi";
import { BsMoonStars} from "react-icons/bs"
const Suggests = () => {
  return (
    <>
      <div className="w-full h-auto flex flex-col items-center absolute">
        <div className="w-4/5 h-auto absolute top-[900px] flex flex-col">
          <div className="w-full h-auto ">
            <h1 className="text-3xl font-bold">What your BMI result means</h1>
            <p className="pt-5 text-gray-600 text-lg">
              A BMI range of 18.5 to 24.9 is considered a {"healthy weight."}{" "}
              Maintaining a healthy weight may lower your chances of
              experiencing health issues later on, such as obesity and type 2
              diabetes. Aim for a nutritious diet with reduced fat and sugar
              content, incorporating ample fruits and vegetables. Additionally ,
              strive for regular physical activity, ideally about 30 minutes
              daily for five days a week.
            </p>
          </div>
        </div>
        <div className="w-full/5 h-auto absolute flex flex-col bg-cyan-50 bg-opacity-30 mt-10 top-[1300px]">
        <Suggest
            icon={<PiBowlFoodLight className=' w-8 h-8 text-pink-600 bg-pink-200 ring-[15px] ring-pink-200 bg-opacity-80 ring-opacity-80 rounded-full'/>}
            title="Healthy eating"
            content="Healthy eating promotes weight control, disease prevention, better digestion, immunity, mental clarity, and mood"
          />
          <Suggest  
          icon={<GiGymBag className=' w-8 h-8 text-yellow-400 bg-yellow-100 ring-[15px] ring-yellow-100 bg-opacity-80 ring-opacity-80 rounded-full'/>}
          title="Regular exercise"
          content="Exercise improves fitness , aids weight control, elevates mood, and reduces disease risk , foresting wellness and longevity"
          />
          <Suggest
          icon={<BsMoonStars className=' w-8 h-8 text-sky-600 bg-sky-200 ring-[15px] ring-sky-200 bg-opacity-80 ring-opacity-80 rounded-full'/>}
          title="Adequate sleep"
          content="Sleep enhances mental clarity, emotional stability, and physical wellness , promoting overall restoration and rejuvenation "
          />
        </div>
      </div>
    </>
  );
};

export default Suggests;
