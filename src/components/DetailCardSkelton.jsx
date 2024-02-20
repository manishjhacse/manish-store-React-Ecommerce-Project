import React from "react";
const DetailCardSkelton = () => {
  return (
    <div className="w-full  max-w-[1080px] flex animate-pulse">
      <div className="h-500 w-500 bg-gray-300  w-1/2 overflow-hidden"></div>
      <div className="p-8">
        <h2 className="text-gray-900 font-semibold w-24 bg-white  h-10 text-3xl mb-4"></h2>
        <p className="text-gray-900 text-lg mb-4 bg-white w-24  h-10 "></p>
        <div className="flex bg-white items-center mb-4">
          <span className="text-yellow-500 bg-white text-2xl h-5 w-10 ml-2"></span>
        </div>
        <div className="flex gap-5 items-center bg-white mb-4">
          <div className="text-green-600 w-10 bg-white h-5 font-semibold text-3xl flex items-center"></div>
        </div>
        <div className="flex space-x-4  mb-4">
          <button className="bg-black w-12 h-5 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-full transition duration-300"></button>
          <button className="bg-red-500 w-12 h-5 hover:bg-gray-400 text-gray-700 font-semibold py-3 px-6 rounded-full transition duration-300"></button>
        </div>
      </div>
    </div>
    
  );
};

export default DetailCardSkelton;
