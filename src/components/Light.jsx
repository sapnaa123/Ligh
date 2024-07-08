import { useState } from "react"

function Light(){

    const [color , setcolor] =useState ("")
    const [isOn , setison] = useState (false)

    //update on button
    const HandleOn = () =>{
        setcolor ("yellow")
        setison(true)
    }

    // update off button
    const HandleOff = () =>{
        setcolor ("white")
        setison(false)
    }

    return <div className="flex justify-center mt-10">
        
        <div>
            <div style={{backgroundColor: color}} className=" w-[400px] h-[400px] mb-5 ml-20 border-4 border-black rounded-full"></div>
           
           <div className=" text-center ml-16 ">
            <button style={{backgroundColor: isOn == true ? "green" : "" }} onClick={HandleOn} className="bg-yellow-500 m-1  px-3 py-2 rounded text-3xl">ON</button>
            <button style={{backgroundColor: isOn == false ? "green" : "" }} onClick={HandleOff} className="bg-yellow-500 m-1 px-3 py-2 rounded text-3xl">OFF</button>
           </div>
        </div>
    </div>
}

export default Light