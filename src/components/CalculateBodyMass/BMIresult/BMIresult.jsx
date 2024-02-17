const BMIresult = ({title,content,result}) => {
  return (
    <>
      <div className="w-full h-auto  flex flex-col items-center py-6 ">
        <div className="w-3/4 h-auto flex flex-col bg-cyan-600 p-8 rounded-lg">
            <p className={`text-white py-1 ${title == "Welcome!" ? 'text-2xl' : 'text-md'}`}> {title}</p>
            <h1 className="pb-4 text-3xl font-bold text-white">
                {result}
            </h1>
            <div className="text-md text-white ">
                {content}
            </div>
        </div>
      </div>
    </>
  );
};

export default BMIresult;
