const BMIresult = () => {
  return (
    <>
      <div className="w-full h-auto  flex flex-col items-center py-6 ">
        <div className="w-3/4 h-auto flex flex-col bg-cyan-600 p-8 rounded-lg">
            <p className="text-white text-md py-1"> Your BMI is...</p>
            <div className="pb-4 text-3xl font-bold text-white">
                Nothing
            </div>
            <div className="text-md text-white ">
                Your BMI suggests you are a healthy weight. Your ideal weight is between...
            </div>
        </div>
      </div>
    </>
  );
};

export default BMIresult;
