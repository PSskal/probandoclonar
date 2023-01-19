import React from "react";
import { IoMdSearch } from "react-icons/io"


function TodoSearch({searchValue, setSearchValue}){

    const onSearchChangeValue = (event)=>{
        setSearchValue(event.target.value)
    }
    return (
        <div className="flex justify-center pt-4">
            <IoMdSearch className="translate-y-2.5 translate-x-7"/>

            <input
            
            className="bg-[#e3f0fc] rounded-[1rem] w-4/5 pl-[2.5rem] pr-8 p-1.5"
            placeholder="Search items"
            type="search"
            onChange={onSearchChangeValue}
               />
            
        </div>
        
        
    )
}

export { TodoSearch };