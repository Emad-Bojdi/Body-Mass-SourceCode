const Bodymass = () => {
  return (
    <>
      <div className="w-full h-auto flex flex-col justify-center items-center ">
        <div className="w-4/5 h-auto flex flex-col absolute top-[400px] bg-white rounded-2xl">
          <h1 className="text-2xl font-bold text-left py-4 pl-4">
            Enter your details below{" "}
          </h1>
          <div className="w-full h-auto flex flex-col justify-center items-center">
            <div className="w-4/5 h-auto flex py-4 justify-around">
              <div className="flex items-center">
                <input type="radio" name="Metric" value="Metric" className="w-5 h-5 bg-gray-100 text-blue-500 mr-5"/>
                <label htmlFor="Metric" className="text-md font-bold ">
                  {" "}
                  Metric{" "}
                </label>
              </div>
              <div className="flex items-center">
                <input type="radio" name="Imperial" value="Imperial" className="mr-5" />
                <label htmlFor="Imperial" className="text-md font-bold "> Imperial </label>
              </div>
            </div>
            <div className="">
              <label htmlFor="Height"> Height </label>
              <input type="number" name="Height" value="Height" />
              <label htmlFor="Weight"> Weight </label>
              <input type="number" name="Weight" value="Weight" />
            </div>
            <div className=""></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bodymass;
