import React from "react";
import { BsCalendarCheck } from "react-icons/bs"
function Header(){


    return (
    
        <div className="pt-5">
            <div className="flex justify-between">
            <p className="text-4xl font-bold">My Goals</p>
            <BsCalendarCheck className="translate-y-1/2"/>  
            </div>
            
            <p className="font-semibold">your dayly progress will shown here</p>

        </div>
        
    )
}

export { Header };