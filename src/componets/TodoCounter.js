import React from "react";
import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { TodoContext } from "../containers/TodoContext";

function TodoCounter(props){

  const {totalTodos, completedTodos} = React.useContext(TodoContext)

    ChartJS.register(ArcElement, Tooltip, Legend);

    const data = {
        labels: [],
        datasets: [
          {
            data: [completedTodos, totalTodos-completedTodos],
            backgroundColor: [
                'rgb(126, 230, 187)',
                'rgb(255, 229, 232)',
                
            
            ],
            borderWidth:1,
          },
        ],
      };

      const options = {
        cutout: 55,
        Response: true,
        };
    
    return (
    
        <>
            <div className="w-6/12 h-6/12 mx-auto my-auto">
                {
                !(totalTodos===0) && 
                <div><p className="font-bold text-3xl translate-y-20 translate-x-10">{(completedTodos*100/totalTodos).toFixed()}%</p>
                <Doughnut className="-translate-y-6" data={data} options={options}/>
                <h2 className="font-serif text-center  text-[#00a9e8] pt-2"> Has completado {completedTodos} de {totalTodos} ToDos </h2>
                </div>
                
                }
                  
            </div>

        </>
        
    )
}

export { TodoCounter };