import React from "react";
import { useState } from "react";

const Overview = ({tasks, deleteTask, setTasks}) => {
    // tasks.map(t => console.log(t.id));
    const [index, setIndex] = useState(0); 
    /*destructuring assignment - taking tasks array out of passed props*/
    return (
        <ul>
            {tasks.map((task) => {
                return (
                    <li className="text-white" key={task.id}>
                        {task.task}
                        {' '}
                        <button onClick={deleteTask}>
                            <span className="text-black">Delete Task</span>
                        </button>
                    </li>
                )
            })}
        </ul>
    );
};

export default Overview