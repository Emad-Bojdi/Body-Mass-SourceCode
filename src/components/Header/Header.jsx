import Bodymass from "../CalculateBodyMass/BodyMass";

const Header = () => {
  return (
    <>
      <header className="w-full h-full bg-gradient-to-l from-cyan-100 to-cyan-50 rounded-br-[4rem]">
        <div className="w-full h-full flex flex-col justify-center items-center">
          <h1 className="w-2/4 text-4xl text-center font-bold pt-12 pb-5"> Body Mass Index Calculator</h1>
          <p className="text-gray-600 w-4/5 text-center pb-64">
            Better understand your weight in relation to your height using our
            body mass index (BM) calculator. While BMI is not the sole
            determinant of a healthy weight, it offers a valuable starting point
            to evaluate your overall health and well-being
          </p>
        </div>
      </header>
      <Bodymass/>
      
    </>
  );
};

export default Header;
