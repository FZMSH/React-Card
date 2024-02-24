import React from 'react'
import Card from './Card'
function Cards({users,handleRemove}) {
  return (
    <div className='w-full min-h-96 max-h-96 overflow-auto p-3 flex justify-center gap-4 flex-wrap'>
        {users.map((item,index)=>{
          return  <Card handleRemove={handleRemove} id={index} users={item} key={index}/>
        })}
        
    </div>
  )
}

export default Cards