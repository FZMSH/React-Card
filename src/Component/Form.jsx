import React from 'react'
import { useForm } from 'react-hook-form'

function Form({handleFormSubmit}) {
const {register,handleSubmit,reset} = useForm()

const handle = (data)=>{
 handleFormSubmit(data)
 reset()
}
  return (
    <div>
        <form className='mt-10 flex justify-center gap-10'onSubmit={handleSubmit(handle)}>
            <input {...register('name')} className='rounded-md px-2 py-1 font-semibold text-base' type="text" placeholder='name'/>
            <input {...register('email')} className='rounded-md px-2 py-1 font-semibold text-base' type="text" placeholder='email'/>
            <input {...register('imageurl')} className='rounded-md px-2 py-1 font-semibold text-base' type="text" placeholder='image url'/>
            <input className='bg-blue-500 hover:bg-blue-700 text-white text-xs font-bold px-5 rounded transition ease-in-out duration-300' type="submit" />
        </form>
    </div>
  )
}

export default Form