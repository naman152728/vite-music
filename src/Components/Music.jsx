import React from "react";

const Music = ({ data, handleClick, index }) => {
  const { img, name, artist, added } = data;
  return (
    <div className="w-64 bg-gray-100 p-4 rounded-xl shadow-md flex flex-col items-center">
      {/* Image box */}
      <div className="w-24 h-24 bg-orange-500 rounded-md overflow-hidden mb-4">
        <img className="w-full h-full object-cover" src={img} alt="" />
      </div>

      {/* Text */}
      <div className="text-center">
        <h2 className="text-lg font-semibold text-gray-900">{name}</h2>
        <p className="text-sm text-gray-600">{artist}</p>
      </div>

      {/* Button */}
      <button onClick={()=>handleClick(index)} className={`mt-4 px-4 py-2 rounded-full ${added ? "bg-amber-500" : "bg-orange-500"} text-white text-sm font-medium`}>
        {added ? "Remove from Favourites" : "Add to Favourites"}
      </button>
    </div>
  );
};

export default Music;
