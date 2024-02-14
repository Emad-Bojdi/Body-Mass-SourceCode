const Limitation = ({icon,title,content}) => {
  return (
    <>
      <div className="w-full h-auto flex items-start mt-10 bg-white shadow-[8px_10px_40px_0px_rgba(0,0,0,0.1)] rounded-2xl">
        <div className="w-4/5 h-auto flex flex-col m-6">
          <div className="w-full h-auto flex flex-wrap">
            <div className="w-1/6 h-auto ">{icon}</div>
            <h1 className="w-1/4 h-auto text-2xl font-bold pl-3"> {title} </h1>
          </div>
          <p className="pt-3 text-lg text-gray-600">{content}</p>
        </div>
      </div>
    </>
  );
};

export default Limitation;
