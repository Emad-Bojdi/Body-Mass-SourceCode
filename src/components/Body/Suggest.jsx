const Suggest = ({ icon, title, content }) => {
  return (
    <>
      <div className="w-full h-auto pt-10">
        <div className="w-full h-auto flex flex-col">
          <div className="w-full h-auto pb-8 mx-12">{icon} </div>
          <h1 className="w-full h-auto pb-8 text-3xl font-bold mx-8"> {title} </h1>
          <p className="w-4/5 h-auto text-gray-600 text-lg mx-8">{content}</p>
        </div>
      </div>
    </>
  );
};

export default Suggest;
