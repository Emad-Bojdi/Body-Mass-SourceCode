import BMIresult from "./BMIresult/BMIresult";


const Bodymass = () => {
  return (
    <>
      <div className="w-full h-auto flex flex-col justify-center items-center">
        <div className="w-4/5 h-auto flex flex-col absolute top-[400px] bg-white rounded-2xl shadow-2xl">
          <h1 className="text-2xl font-bold text-left py-4 pl-4">
            Enter your details below{" "}
          </h1>
          <div className="w-full h-auto flex flex-col justify-center items-center">
            <div className="w-4/5 h-auto flex py-4 justify-around">
              <div className="flex items-center">
                <input type="radio" name="Metric" value="Metric" className="w-7 h-7 focus:ring-0 focus:ring-offset-0 checked:text-cyan-800 bg-white border-gray-500 mr-5"/>
                <label htmlFor="Metric" className="text-md font-bold ">
                  {" "}
                  Metric{" "}
                </label>
              </div>
              <div className="flex items-center">
                <input type="radio" name="Imperial" value="Imperial" className="w-7 h-7 focus:ring-0 focus:ring-offset-0 checked:text-cyan-800 bg-white border-gray-500 mr-5" />
                <label htmlFor="Imperial" className="text-md font-bold "> Imperial </label>
              </div>
            </div>
            <div className="w-full h-auto flex flex-col items-center">
              <div className="w-3/4 h-auto flex flex-col relative">
              <label htmlFor="Height" className="pb-2 text-gray-600"> Height </label>
              <input type="number" name="Height"  placeholder="0" className="rounded-lg h-16 outline-none border-gray-300 focus:border-gray-300 focus:ring-0 pl-6 py-4 text-2xl font-bold"/>
              <p className="absolute right-5 top-11 text-2xl font-bold text-cyan-800">
                cm
              </p>
              </div>
              <div className="w-3/4 h-auto flex flex-col relative">
              <label htmlFor="Weight" className="pb-2 text-gray-600"> Weight </label>
              <input type="number" name="Weight" placeholder="0" className="rounded-lg h-16 outline-none border-gray-300 focus:border-gray-300 focus:ring-0 pl-6 py-4 text-2xl font-bold"/>
              <p className="absolute right-5 top-11 text-2xl font-bold text-cyan-800">
                kg
              </p>
              </div>
            </div>
            <div className=""></div>
          </div>
          <BMIresult/>
        </div>
      </div>
    </>
  );
};

export default Bodymass;
<style>

</style>
