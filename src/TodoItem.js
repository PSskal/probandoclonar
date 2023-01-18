import React from "react";

import { BiX } from "react-icons/bi";

function TodoItem(props){


    return (
        <div className="flex rounded-[0.4rem] border bg-cyan-400">

        <input  
        className="w-5 h-5 translate-y-3 translate-x-3" 
        type="checkbox"
        onClick={props.onCompleted}
        checked={props.completed}
        />

        <div className=" p-2  w-full items-center">
            
            {/* tachado de texto "line-through" */}
            <p className={`mx-3 ${props.completed ? 'line-through' : 'no-underline'}`}>{ props.text}</p>

        </div>

        <BiX 
        className="w-7 h-7 translate-y-2 -translate-x-2"
        onClick={props.onDeleted}
        />
        
        </div>
    )
}

export { TodoItem };