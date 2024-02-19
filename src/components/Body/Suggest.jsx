const Suggest = ({ icon, title, content }) => {
  return (
    <>
      <div className="w-full h-auto pt-10 xl:pt-40 xl:px-8">
        <div className="transition ease-in-out delay-75 w-full h-auto flex flex-col pb-4 shadow-none hover:shadow-xl duration-100 ">
          <div className="w-full h-auto pb-8 mx-12">{icon} </div>
          <h1 className="w-full h-auto pb-8 text-3xl font-bold mx-8"> {title} </h1>
          <p className="w-4/5 h-auto text-gray-600 text-lg px-8 xl:w-full">{content}</p>
        </div>
      </div>
    </>
  );
};

export default Suggest;
