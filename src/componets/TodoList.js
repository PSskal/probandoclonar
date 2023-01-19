import React from "react";

function TodoList(props){
    return (
        <section>
            <ul className="space-y-2 py-4" >
                { props.children}
            </ul>
        </section>
    )
}

export { TodoList };