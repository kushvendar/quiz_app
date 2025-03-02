import '../App.css'

import React from 'react'

function Quiz() {
  return (
    <div className='bg-white w-[90%] max-w-[600px] mt-[100px] ml-auto mr-auto rounded-[10px] p-[30px]'>
      <h1 className='text-[25px] font-semibold text-[#001e4d] border-b border-solid border-[#333] pb-[30px]'>Simple Quiz</h1>
      <div className='pt-[20px] pb-[20px] '>
        <h2 className='text-[18px] text-[#001e4d] font-semibold '>Question goes here</h2>
        <div className='flex flex-col'>
        <button className='bg-white text-[#222] font-medium w-[90%] border border-solid border-[#222] p-[10px] mt-[10px] mb-[10px] text-left rounded-[4px] cursor-pointer  transition-all ease-[0.3s] hover:bg-[#222] hover:text-white '>Answer 1</button>
        <button className='bg-white text-[#222] font-medium w-[90%] border border-solid border-[#222] p-[10px] mt-[10px] mb-[10px] text-left rounded-[4px] cursor-pointer  transition-all ease-[0.3s] hover:bg-[#222] hover:text-white '>Answer 2</button>
        <button className='bg-white text-[#222] font-medium w-[90%] border border-solid border-[#222] p-[10px] mt-[10px] mb-[10px] text-left rounded-[4px] cursor-pointer  transition-all ease-[0.3s] hover:bg-[#222] hover:text-white '>Answer 3</button>
        <button className='bg-white text-[#222] font-medium w-[90%] border border-solid border-[#222] p-[10px] mt-[10px] mb-[10px] text-left rounded-[4px] cursor-pointer  transition-all ease-[0.3s] hover:bg-[#222] hover:text-white '>Answer 4</button>
        </div>
        <button className='bg-[#001e4d] text-white font-medium w-[150px] p-[10px] mt-[20px] ml-auto mr-auto rounded-[4px] cursor[pointer] hidden'>Next</button>
      </div>
    </div>
  )
}

export default Quiz