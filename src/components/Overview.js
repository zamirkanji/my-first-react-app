import React from "react";

const Overview = (props) => {
    return (
        <ul>
            {props.tasks.map((task) => {
                return (
                    <li className="text-white" key={task.id}>
                        {task.task}
                        {' '}
                        <>
                            {/* <button type="button" onClick={props.editTask}>Edit Task</button> */}
                            <button onClick={() => {props.setTasks(props.tasks.filter(t => t.id !== task.id))}}> 
                                <span className="text-black">Delete Task</span>
                            </button>
                        </>
                    </li>
                )
            })}
        </ul>
    );
};

export default Overview