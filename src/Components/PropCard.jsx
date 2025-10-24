import React from "react";

const PropCard = ({ name, profession, image, friend, AddFriend }) => {
  return (
    <div className="w-65 bg-white rounded-xl shadow-lg overflow-hidden">
      <img src={image} alt="Profile" className="w-full h-60 object-cover" />

      <div className="p-4 text-center">
        <h2 className="text-xl font-semibold text-zinc-800">{name}</h2>
      </div>

      <div className="px-4 pb-4 text-center text-sm text-zinc-600">
        <p>{profession}</p>
      </div>

      <div className="flex items-center justify-center">
        <button
          className={`px-3 py-1 rounded-full mb-4 ${
            friend ? "bg-red-500" : "bg-blue-500"
          } text-white`}
          onClick={AddFriend}
        >
          {friend ? "Remove Friend" : "Add Friend"}
        </button>
      </div>
    </div>
  );
};

export default PropCard;
