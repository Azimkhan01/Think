import React, { useEffect, useRef, useState } from "react";
import type { fields, initialize } from "../../types/tools";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/Store";

function Tools() {

    const [initialize,setInitialize] = useState<initialize>({
      title:"",
      field:{
        name:"",
        value:""
      },
    });
    const [isSearchVaraible,setIsSearchVariable] = useState<boolean>(true)
    const [availableFields,setAvailailbleFields] = useState<fields[]>([])
    const MainForm = useSelector((state:RootState)=>state.work.work)

    
    const handleFieldChange = (e:React.ChangeEvent<HTMLSelectElement>):void=>{
        setInitialize(prev=>({...prev,field:{...prev.field,name:e.target.value}}))
        console.log(e.target.value)
        switch(e.target.value)
        {
          case "variable":{
            setIsSearchVariable(true)
            setAvailailbleFields((prev)=>{
              let temp:any
              temp = MainForm?.filter((item)=>item.field.name === e.target.value) 
              return temp
            })
            break;
          }
          case "text":{
              setIsSearchVariable(false)
             setAvailailbleFields((prev)=>{
              let temp:any
              temp = MainForm?.filter((item)=>item.field.name === e.target.value) 
              return temp
            })
            break;
          }
          case "variation":{
            setIsSearchVariable(false)
             setAvailailbleFields((prev)=>{
              let temp:any
              temp = MainForm?.filter((item)=>item.field.name === e.target.value) 
              return temp
            })
          break;
          }
          case "combination":{
              setIsSearchVariable(false)
             setAvailailbleFields((prev)=>{
              let temp:any
              temp = MainForm?.filter((item)=>item.field.name === e.target.value) 
              return temp
            })
            break;
          }
          case 'default':{
            console.log("wrong field have selected .")
          }
        }

    }

    const field:fields[] =[
        {
            name:"Variable",
            value:"variable"
        },
        {
            name:"Text",
            value:"text"
        },
        {
            name:"Variation",
            value:"variation"
        },{
            name:"Combination",
            value:"combination"
        }
    ]

    return (
    <section className="w-full border border-black/20 flex flex-col justify-between p-4">
      {/* input section */}
      <div className="flex flex-wrap gap-y-2 justify-between">
         {/* title input here */}
      <div>
        <input
          type="text"
          placeholder="Enter Title"
          className="p-2 border border-black/30 rounded-lg"
          value={initialize.title}
          onChange={(e)=>{setInitialize(prev => ({title:e.target.value,field:prev.field}))}}        
        />
      </div>

      {/*  type   */}
      <div className="flex items-center">
        {/* <span>Select Field Type:</span> */}
        <select
         className="flex items-center outline-0 border border-black/30 rounded-lg p-2 mx-1"
         onChange={(e)=>{handleFieldChange(e)}}
         >
            <option disabled selected >Select Type Of Feilds</option>
            {
                field.map((item:fields,index:number)=>
                    <option key={index} value={item.value.toString()} >{item.name}</option>
                )
            }
        </select>
      </div>
      <div>
        <input
        disabled={isSearchVaraible}
          type="search"
          placeholder="search for variable" 
          className="p-2 border border-black/30 rounded-lg outline-0 disabled:border-0"
        />
      </div>

      <div>
        <input
        placeholder="Variable Value"
        className="p-2 border border-black/30 outline-0 rounded-lg"
        onChange={(e)=>{
          setInitialize(prev=>
          (
            {
              ...prev,field:{
                ...prev.field,value:e.target.value
              }
            }
          )
          )
        }}
        />
      </div>

      {/* button to add this */}
      <div>
        <button className="p-2 border border-black/30 rounded-lg hover:bg-neutral-100 transition-all ease-in-out duration-100">
          Insert
        </button>
      </div>
      </div>
      {/* extra section */}
      <div>
          
      </div>
    </section>
  );
}

export default Tools;
