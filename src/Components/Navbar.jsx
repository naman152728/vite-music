import React from 'react'

const Navbar = ({data}) => {
  return (
    <div className='w-full px-15 py-3 flex justify-between items-center'>
      <h3 className='text-orange-500'>Orange</h3>
        <div className='flex bg-orange-400 p-2 rounded-md text-white gap-2 text-sm'>
            <h3>Favourites</h3>
            <h4>{data.filter(item=>item.added).length}</h4>
        </div>

    </div>
  )
}

export default Navbar
