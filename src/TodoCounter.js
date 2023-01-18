import React from "react";
import { BsCalendarCheck } from "react-icons/bs"
function TodoCounter(){
    return (
    
        <div className="pt-5">
            <div className="flex justify-between">
            <p className="text-4xl font-bold">My Goals</p>
            <BsCalendarCheck className="translate-y-1/2"/>
            </div>
            
            <p>your dayly progress will shown here</p>
            
            <h2 className="font-serif text-center pt-5"> Has completado 2 de 3 ToDos </h2>


        </div>
        
    )
}

export { TodoCounter };