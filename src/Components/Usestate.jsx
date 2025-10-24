import React, { useState } from "react";

const Usestate = () => {
  const [score, setScore] = useState(0);
  const [obj, setObj] = useState({ name: "Ritika", age: 21, isBannded: false });
  const [arr, setArr] = useState([1, 2, 3, 4, 5, 6]);
  const [profile, setProfile] = useState([
    { name: "Naman", age: 21 },
    { name: "Swapnil", age: 19 },
    { name: "Aditya", age: 22 },
  ]);
  const [val, setVal] = useState(false);
  return (
    <div className="text-center">
      <div>
        <h1 className="p-3">{score}</h1>
        <button
          className="px-2 py-2 bg-amber-300 rounded-full m-3"
          onClick={() => setScore(score + 1)}
        >
          Change
        </button>
      </div>

      <div>
        <h1>Name: {obj.name}</h1>
        <h1>Age: {obj.age}</h1>
        <h1>Banned: {obj.isBannded.toString()}</h1>
        <button
          className={`px-3 py-1 rounded-full ${
            obj.isBannded ? "bg-indigo-400" : "bg-red-400"
          }`}
          onClick={() => setObj({ ...obj, isBannded: !obj.isBannded })}
        >
          Change
        </button>
      </div>

      <div>
        {arr.map((item) => (
          <h1>{item}</h1>
        ))}
        <button
          onClick={() =>
            setArr(() => {
              return arr.filter((item, index) => index != arr.length - 1);
            })
          }
          className="p-3 rounded-full bg-blue-600"
        >
          Click
        </button>
      </div>

      <div>
        {profile.map((item) => {
          return (
            <div>
              <h1>{item.name}</h1>
              <h2>{item.age}</h2>
            </div>
          );
        })}
        <button onClick={()=> setProfile(()=> profile.map(item => item.name === "Aditya" ? ({name:"Aditya", age: 20}): item))} className="p-3 rounded-full bg-blue-600">Click</button>
      </div>

      <div>
        <h1>val: {val.toString()}</h1>
        <button
          onClick={() => setVal(!val)}
          className="p-3 rounded-full bg-blue-600"
        >Click</button>
        <h1>{val ? "Abhi Na Jao Chhodkar" : "Chala ja BSDK"}</h1>
      </div>
    </div>
  );
};

export default Usestate;
