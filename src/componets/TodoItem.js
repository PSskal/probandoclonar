import React from "react";

import { BiX } from "react-icons/bi";

function TodoItem(props){


    return (
        <div className="flex rounded-[0.4rem] border bg-[#00a9e8]">

        <input  
        className="w-5 h-5 translate-y-3 translate-x-3" 
        type="checkbox"
        onClick={props.onCompleted}
        defaultChecked={props.completed}
        />

        <div className=" p-2  w-full items-center">
            
            {/* tachado de texto "line-through" */}
            <p className={`mx-3 font-medium ${props.completed ? 'line-through' : 'no-underline'}`}>{ props.text}</p>
            <p className="mx-3 italic font-light text-sm">{props.time} hr to goal</p>

        </div>

        <BiX 
        className="w-7 h-7 translate-y-2 -translate-x-2"
        onClick={props.onDeleted}
        />
        
        </div>
    )
}

export { TodoItem };