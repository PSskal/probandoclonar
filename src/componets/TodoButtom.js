import React from "react";
import { AiOutlinePlusCircle } from 'react-icons/ai'
function TodoButtom(props){

    const onClickButton = () => {
        props.setOpenModal(prevState => !prevState);
    }
    return (
        
        <button
         className="w-full py-4 flex justify-center"
         onClick={onClickButton}
         >
            <AiOutlinePlusCircle className="w-10 h-10 text-blue-600"/> 
        </button>

        

        
        
    )
}

export { TodoButtom };