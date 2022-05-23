import React, { useState } from "react";


const Overview = (props) => {

    const [buttonClicked, setButtonClicked] = useState(false);
    const [editTask, setEditTask] = useState(false);
    const [editButtonText, setEditButtonText] = useState('Edit Task');
    const [deleteButtonText, setDeleteButtonText] = useState('Delete Task');

    return (
        <ul>
            {props.tasks.map((task) => {
                return (
                    <li className="text-white" key={task.id}>
                        <span contentEditable={editTask} id="task-text">
                            {task.task}
                        </span>
                        {/* {' '} */}
                        <div id="edit-delete-btn-container">
                            <button className="list-buttons" type="button" onClick={() => {
                                editButtonText === 'Submit' ? setEditButtonText('Edit Task') : setEditButtonText('Submit');
                                editTask ? setEditTask(false) : setEditTask(true);  
                                // editButtonText === 'Submit' ? props.setTasks(props.tasks.map(t => console.log(t))) : null;
                            }}>
                                {editButtonText}
                            </button>
                            <button className="list-buttons" onClick={() => {props.setTasks(props.tasks.filter(t => t.id !== task.id))}}> 
                                <span className="text-black">{deleteButtonText}</span>
                            </button>
                        </div>
                    </li>
                )
            })}
        </ul>
    );
};

export default Overview