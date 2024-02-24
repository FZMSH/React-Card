import React from 'react'

function Card({users,handleRemove,id}) {
    const {name,email,imageurl} =users
  return (
    <>
    <div className='w-52 h-full bg-white rounded-lg flex flex-col items-center p-2 gap-1'>
        <div className='w-10 h-10 bg-blue-600 rounded-full overflow-hidden'>
                <img  className='w-full h-full object-cover' src={imageurl} alt="" />
        </div>
        <h3 className='font-semibold'>{name}</h3>
        <h4 className='opacity-60 text-xs font-semibold'>{email}</h4>
        <p className='text-center text-xs font-semibold tracking-tight leading-1'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id facere non praesentium!</p>
        <button onClick={()=>handleRemove(id)} className="bg-red-500 hover:bg-red-700 text-white text-xs font-bold py-1 px-3 mt-2 rounded transition ease-in-out duration-300">
    Remove it
   </button>

    </div>
    </>
  )
}

export default Card;