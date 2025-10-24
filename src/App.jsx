import React, { useState } from "react";
import Card from "./Components/Card";
import PropCard from "./Components/PropCard";
import Music from "./Components/Music";
import Navbar from "./Components/Navbar";

function App() {
  // const data = [
  //   {
  //     name: "Naman",
  //     profession: "Developer",
  //     image:
  //       "https://plus.unsplash.com/premium_photo-1671656349218-5218444643d8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aHVtYW58ZW58MHx8MHx8fDA%3D",
  //     friend: false,
  //   },
  //   {
  //     name: "Ritika",
  //     profession: "Designer",
  //     image:
  //       "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aHVtYW58ZW58MHx8MHx8fDA%3D",
  //     friend: false,
  //   },
  //   {
  //     name: "Swapnil",
  //     profession: "Engineer",
  //     image:
  //       "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGh1bWFufGVufDB8fDB8fHww",
  //     friend: false,
  //   },
  //   {
  //     name: "Aditya",
  //     profession: "Doctor",
  //     image:
  //       "https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?q=80&w=766&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     friend: false,
  //   },
  // ];

  // const [realData, setData] = useState(data);

  // // toggle friend status
  // const handleFriend = (index) => {
  //   const updatedData = realData.map((item, i) =>
  //     i === index ? { ...item, friend: !item.friend } : item
  //   );
  //   setData(updatedData);
  // };

  const data = [
    {
      img: "https://lh3.googleusercontent.com/s58GQHGHBILW5g-zX03kg_7jUGWA5IXPqt9-UweajvXx3BYi_Q05Gw2ZQvVyQGUyGt47m5v1QAA9qYAv=w544-h544-l90-rj",
      name: "Tum Ho To",
      artist: "Vishal Mishra",
      added: false,
    },
    {
      img: "https://lh3.googleusercontent.com/80qlxOAzy9Ner66FqLeeHfkPWm4PuV4Yr5OJNf-fdV0RijzFftBUIZC5k6Vfs4NXf0J0JVPEhdz3tRE_=w544-h544-l90-rj",
      name: "Tere Aas Paas Din Saara ",
      artist: "Gaurav Chatterji",
      added: false,
    },
    {
      img: "https://lh3.googleusercontent.com/FOWVxykYND0FkmVvjkxwvP3t8EQtJi3dg1obE2c1MfhFLmbUwbfzGYOKF3VDSKXs-MZNiYUxPCskzucI=w544-h544-l90-rj",
      name: "Choo Lo",
      artist: "The Local Train",
      added: false,
    },
    {
      img: "https://lh3.googleusercontent.com/Ul_rEl0e18WiBv-HIKRla87l0-K8uNSrKmFIwR6N0206bAAF27juOMDfBydQK1UOjRJ1SCxNuCPd2l56=w544-h544-l90-rj",
      name: "Sahiba",
      artist: "Aditya Rikhari",
      added: false,
    },
    {
      img: "https://lh3.googleusercontent.com/KyrCGnftqfj4eJ9FnumH8GlNsddPCa8y_LUtsS1dZqX-cQmILOMPKZQp3tEmPWMGN-Ee97I1USn3911GLg=w544-h544-l90-rj",
      name: "Husn",
      artist: "Anuv Jain",
      added: false,
    },
    {
      img: "https://lh3.googleusercontent.com/yE9ZMV__rryRpw_dYFdN4PCbEOMO_F8avkEl2LnDHw417TaYK_R7wsESoNfrI2bf-k3Ro_eQVvoy_bj05w=w544-h544-l90-rj",
      name: "Tu Hai Toh",
      artist: "Hunny Bunny",
      added: false,
    },
    {
      img: "https://lh3.googleusercontent.com/XEpKU4CHyyIkE33zKcYJz8uMrZv9W03Q2SKx7RTE3_bj1ZSBjZ_sIUPdcglS2_1wWNZTo09hHNpmo0R8Dg=w544-h544-l90-rj",
      name: "Finding Her",
      artist: "Kushagra",
      added: false,
    },
    {
      img: "https://lh3.googleusercontent.com/osEQplA2FDktP-YRPgzOX_YLDOd_fRxHM7oIV5wLVWrT75Bv3bzzaIPifi4RaSEr20Ph5wcyBiJgrE4=w544-h544-l90-rj",
      name: "Sahiba",
      artist: "Jasleen Royal",
      added: false,
    },
    {
      img: "https://lh3.googleusercontent.com/rirlc3hmOGpqi6HQlA7bYrQ_eUs93RNkY5hvOjvVM0TXQdrwNc9_z2BCml7ORw7UaB2Svh05-Y5Xv8ay_A=w544-h544-l90-rj",
      name: "Vaaroon",
      artist: "Anand Bhaskar",
      added: false,
    },
  ];

  const [realData, setData] = useState(data);
  const handleClick = (index) => {
    const updatedData = realData.map((item, i) =>
      i === index ? { ...item, added: !item.added } : item
    );
    setData(updatedData);
  }

  return (
    <div className="min-h-screen bg-zinc-300 p-5">
      {/* <Card /> */}
      {/* <Usestate /> */}
      {/* <PropCard text = "Know More" color = "bg-blue-500"/> <PropCard text = "Download" color = "bg-green-500"/> */}
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {realData.map((profile, index) => (
          <PropCard
            key={index}
            name={profile.name}
            profession={profile.profession}
            image={profile.image}
            friend={profile.friend}
            AddFriend={() => handleFriend(index)}
          />
        ))}
      </div> */}

      <Navbar data = {realData}/>
      <div className="px-20 flex flex-wrap gap-9">
        {realData.map((song, index) => (
          <Music data={song} handleClick={() => handleClick(index)} key={index} />
        ))}
      </div>
    </div>
  );
}

export default App;
