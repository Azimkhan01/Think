import React, { type ChangeEvent } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setMainTitle } from '../../redux/Slicer/Work'
import type { AppDispatch, RootState } from '../../redux/Store'

function Heading() {

  const dispatch = useDispatch<AppDispatch>()
  const heading = useSelector((state:RootState)=>state.work.title)
  const handleMainHeading = (e:React.ChangeEvent<HTMLInputElement>)=>{

    // if(e.target.value.length > 0 )
    dispatch(setMainTitle({value:e.target.value}))
    // else{
        
    // }
  } 
    

  return (
    <div className="w-full p-4" >
      <input
      type="text"
      placeholder="Title Unamed"
      className="p-2 rounded-lg outline-0 border border-transparent focus:border-black/20 text-xl"
        onChange={(e)=>{
          handleMainHeading(e)
        }} 
        value={heading} 
      />
    </div>
  )
}

export default Heading