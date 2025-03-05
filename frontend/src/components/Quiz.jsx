import '../App.css'
import '../Assets/data.js'

import React, { use, useState, useTransition } from 'react'
import { data } from '../Assets/data.js'

function Quiz() {
  const[idx,setIdx]=useState(0)
  const [question,setQuestion]=useState(data[idx])
  const [color,setColor]=useState()

  const checkAns=(e,ans)=>{
    if(question.ans===ans){
        setColor(true)
    } else {
      setColor(false)
    }

  }
  return (
    <div className='bg-white w-[90%] max-w-[600px] mt-[100px] ml-auto mr-auto rounded-[10px] p-[30px]'>
      <h1 className='text-[25px] font-semibold text-[#001e4d] border-b border-solid border-[#333] pb-[30px]'>General Quiz</h1>
      <div className='pt-[20px] pb-[20px] '>
        <h2 className='text-[18px] text-[#001e4d] font-semibold '>{idx+1}. {question.question}</h2>
        <div className='flex flex-col '>
        <button className={`bg-white  text-[#222] font-medium w-[90%] border border-solid border-[#222] p-[10px] mt-[10px] mb-[10px] text-left rounded-[4px] cursor-pointer  transition-all ease-[0.3s] hover:bg-[#222] hover:text-white`}  onClick={(e)=>{checkAns(e,1)}}>{question.option1}</button>
        <button className='bg-white text-[#222] font-medium w-[90%] border border-solid border-[#222] p-[10px] mt-[10px] mb-[10px] text-left rounded-[4px] cursor-pointer  transition-all ease-[0.3s] hover:bg-[#222] hover:text-white'  onClick={(e)=>{checkAns(e,2)}}>{question.option2}</button>
        <button className='bg-white text-[#222] font-medium w-[90%] border border-solid border-[#222] p-[10px] mt-[10px] mb-[10px] text-left rounded-[4px] cursor-pointer  transition-all ease-[0.3s] hover:bg-[#222] hover:text-white' onClick={(e)=>{checkAns(e,3)}}>{question.option3}</button>
        <button className='bg-white text-[#222] font-medium w-[90%] border border-solid border-[#222] p-[10px] mt-[10px] mb-[10px] text-left rounded-[4px] cursor-pointer  transition-all ease-[0.3s] hover:bg-[#222] hover:text-white ' onClick={(e)=>{checkAns(e,4)}}>{question.option4}</button>
        </div>
        <button className='bg-[#001e4d] text-white font-medium w-[150px] p-[10px] mt-[20px] ml-auto mr-auto rounded-[4px] cursor[pointer] hidden'>Next</button>
      </div>
    </div>
  )
}

export default Quiz