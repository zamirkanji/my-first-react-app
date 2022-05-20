import React from "react";
import { useState } from "react";

const Overview = (props) => {
    // const [index, setIndex] = useState(0); 
    /*destructuring assignment - taking tasks array out of passed props*/
    return (
        <ul>
            {props.tasks.map((task) => {
                return (
                    <li className="text-white" key={task.id}>
                        {task.task}
                        {' '}
                        <button onClick={props.setTasks(props.tasks.filter(t => t.id !== task.id))}>
                            <span className="text-black">Delete Task</span>
                        </button>
                    </li>
                )
            })}
        </ul>
    );
};

export default Overview