import React from "react";

import { BiX } from "react-icons/bi";

function TodoItem(props){
    return (
        <div className="flex rounded-[0.4rem] border bg-cyan-400">
        <input  className="w-5 h-5 translate-y-3 translate-x-3" type="checkbox"/>
        <div className=" p-2  w-full items-center">
            
            <p className="mx-3">{ props.text}</p>

        </div>
        <BiX className="w-7 h-7 translate-y-2 -translate-x-2"/>
            
            
        </div>
    )
}

export { TodoItem };