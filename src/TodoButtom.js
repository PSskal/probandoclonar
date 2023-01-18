import React from "react";
import { AiOutlinePlusCircle } from 'react-icons/ai'
function TodoButtom(){
    return (
        
        <button
         className="w-full py-4 flex justify-center"
         
         >
            <AiOutlinePlusCircle className="w-10 h-10 "/> 
        </button>
        
    )
}

export { TodoButtom };