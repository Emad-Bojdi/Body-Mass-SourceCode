import Bodymass from "../CalculateBodyMass/BodyMass";

const Header = () => {
  return (
    <>
      <div className="w-full h- auto ">
        <header className="w-full h-full bg-gradient-to-l from-cyan-100 to-cyan-50 rounded-br-[4rem] xl:w-3/4 xl:pt-40">
          <div className="w-full h-full flex flex-col justify-center items-center lg:justify-start lg:pt-10 xl:items-start xl:pl-32 xl:w-4/5">
            <h1 className="w-2/4 text-4xl text-center font-bold pt-12 pb-5 lg:text-6xl xl:text-left">
              {" "}
              Body Mass Index Calculator
            </h1>
            <p className="text-gray-600 w-4/5 text-center pb-64 lg:text-lg lg:pt-5 lg:pb-64 xl:text-left">
              Better understand your weight in relation to your height using our
              body mass index (BM) calculator. While BMI is not the sole
              determinant of a healthy weight, it offers a valuable starting
              point to evaluate your overall health and well-being
            </p>
          </div>
        </header>
        <Bodymass />
      </div>
    </>
  );
};

export default Header;
