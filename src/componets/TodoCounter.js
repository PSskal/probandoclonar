import React from "react";
import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

function TodoCounter({total, completed}){

    ChartJS.register(ArcElement, Tooltip, Legend);

    const data = {
        labels: [],
        datasets: [
          {
            data: [completed, total-completed],
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
                <p className="font-bold text-3xl translate-y-20 translate-x-10">{(completed*100/total).toFixed(1)}%</p>
                <Doughnut className="-translate-y-6" data={data} options={options}/>
                    
            </div>
            
            
            <h2 className="font-serif text-center  text-[#00a9e8]"> Has completado {completed} de {total} ToDos </h2>


        </>
        
    )
}

export { TodoCounter };