import Limitation from "./Limitation";
import { BsGenderAmbiguous } from "react-icons/bs";
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import { GiMuscleUp } from "react-icons/gi";
import { PiBabyLight } from "react-icons/pi";
import { PiPerson } from "react-icons/pi";

const Limitations = () => {
  return (
    <>
      <div className="w-full h-auto flex flex-col items-center absolute bg-cyan-50 bg-opacity-30">
        <div className="w-4/5 h-auto flex flex-col items-center bg-white absolute top-[2200px]">
          <h1 className="w-full h-auto text-4xl font-semibold text-center">
            {" "}
            Limitations of BMI{" "}
          </h1>
          <p className="w-full h-auto text-lg text-center text-gray-600 pt-8">
            Although BMI is often a practical indicator of healthy weight, it is
            not suited for every person. Specific groups should carefully
            consider their BMI outcomes, and in certain cases, the measurement
            may not be beneficial to use .{" "}
          </p>
          <div className="w-full h-auto bg-cyan-50 bg-opacity-30">
            <Limitation
              icon={<BsGenderAmbiguous className="w-8 h-8 text-orange-500 mx-2"/>}
              title="Gender"
              content="The development and body fat composition of girls and boys vary with age. Consequently, a child's age and gender are considered when evaluating their BMI"
            />
            <Limitation
              icon={<LiaBirthdayCakeSolid className="w-8 h-8 text-teal-600 mx-2" />}
              title="Age"
              content="in aging individuals, increases body fat and muscle loss may cause BMI to underestimate body fat content."
            />
            <Limitation
              icon={<GiMuscleUp className="w-8 h-8 text-purple-500 mx-2"/>}
              title="Muscle"
              content="BMI may misclassify muscular individuals as overweight or obese, as it doesn't differentiate muscle from fat. "
            />
            <Limitation
              icon={<PiBabyLight className="w-8 h-8 text-yellow-400 mx-2"/>}
              title="Pregnancy"
              content="Expectant mothers experience weight gain due to their growing baby. Maintaining a healthy pre-pregnancy BMI is advisable to minimise health risks for both mother and child"
            />
            <Limitation
              icon={<PiPerson className="w-8 h-8 text-pink-500 mx-2"/>}
              title="Race"
              content="Certain health concerns may affect individuals of some Black and Asian origins at lower BMIs than others. To learn more, it is advised to discuss this with your GP or practice nurse"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Limitations;
