import React from 'react'

function Card() {
  
    let data = [
      {
        image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlfGVufDB8fDB8fHww",
        name: "Ian Doodley",
        info: "Im a web developer, and im very good at what i do. I love creating user-friendly and interactive websites.",
        inStock: false
      },
      {
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVvcGxlfGVufDB8fDB8fHww",
        name: "Sara Smith",
        info: "Im a apparently beautiful woman, but i'm also a good dancer. I love to dance and sing in the streets.",
        inStock: true
      },
      {
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVvcGxlfGVufDB8fDB8fHww",
        name: "Johi Doe",
        info: "Im a software engineer, and i love creating amazing things. I'm a bit of a perfectionist.",
        inStock: true
      }
    ]
    return (
      <div className="w-full min-h-screen bg-zinc-800 flex items-center justify-center">
  <div className="flex gap-6 flex-wrap justify-center">
    {data.map((item, i) => (
      <div
        className="w-72 bg-white rounded-xl shadow-lg overflow-hidden"
        key={i}
      >
        {/* Top Image (same size for all) */}
        <img
          src={item.image}
          alt="Profile"
          className="w-full h-60 object-cover"
        />

        {/* Middle Name */}
        <div className="p-4 text-center">
          <h2 className="text-xl font-semibold text-zinc-800">
            {item.name}
          </h2>
        </div>

        {/* Bottom Info */}
        <div className="px-4 pb-4 text-center text-sm text-zinc-600">
          <p>{item.info}</p>
        </div>
        <button onClick={()=>(item.inStock ? (alert("Item is in Stock")) : (alert("Item is out of Stock")))} className={`px-4 py-2 ${item.inStock ? "bg-blue-400" : "bg-red-400"} rounded-md text-xs m-4 text-white hover:bg-gray-400`}>{item.inStock ? "In Stock" : "Out Of Stock"}</button>
      </div>
    ))}
  </div>
</div>


  )
} 

export default Card
