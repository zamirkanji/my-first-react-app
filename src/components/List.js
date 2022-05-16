import uniqid from 'uniqid';
import Overview from './Overview';
import React from 'react';
import { useState } from 'react';

export default function List () {
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([]);
    const [buttonState, setButtonState] = useState(false);

    const clearTasks = () => {
        return setTasks([])
    }

    const deleteTask = (e) => {
        console.log(tasks, task);
        console.log(e);
        console.log('test delete task button');
        return setTasks(tasks.filter(t => t.id !== task.id))
    }

    const taskInput = e => {
        try {
            setTask(e.target.value)
        } catch (e) {
            console.log(e);
        }
    }

    return (
    <>
        <form>
            <label className='text' htmlFor='taskInput'>Enter Task: </label>
            <input 
                onChange={taskInput}   
                value={task} 
                type='text' 
                id='taskInput'
                required
            />
            <button onClick={e => {
                e.preventDefault();
                if (task.length > 0) {
                    setButtonState(true);
                    setTask('');
                    setTasks([
                        ...tasks,
                    {id: uniqid(), task: task}
                    ])
                    console.log(task, tasks, buttonState);
                } else {
                    return null
                }  
                
            }} type='submit'>
                <span className='text' >Add Task</span>
            </button>
        </form>
        {buttonState ? <Overview tasks={tasks} deleteTask={deleteTask}/> : null}
        <div id='clear-all-container'>    
            {tasks.length > 0 ? 
                <button id='clear-all' onClick={clearTasks}>
                    Clear All Items
                </button> : null
            }
        </div>
        
    </>
    )
}