const CommunityPartner = () => {
  return (
    <div className="border-4 border-slate-800 w-full border-t-0 border-b-0 p-4 pb-4 mb-0 ">
      <div className="flex ">
        <div className=" w-full h-96">
          <div className="flex justify-between w-1/2 h-96 bg-gray-600  leading-[120px] ml-6">
            <div className="flex-col">
              <h1 className="text-[128px] font-bold  text-white">Community</h1>
              <h2 className="text-[120px] font-semibold text-white ">
                {" "}
                Partners
              </h2>
            </div>
            <div className="bg-orange-500 w-1/2 h-96 "></div>
          </div>
        </div>
      </div>
      <div className="bg-yellow-500 w-full h-52"></div>
    </div>
  );
};

export default CommunityPartner;
