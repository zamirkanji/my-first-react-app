import uniqid from 'uniqid';
import Overview from './Overview';
import ClearAllButton from './ClearAllButton';
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

    const trimString = (str) => {
        let trimmedStr = str.trim();
        return trimmedStr
    }

    return (
    <>
        <form>
            <label className='text-white' htmlFor='taskInput'>Enter Task: </label>
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
                    {id: uniqid(), task: trimString(task)}
                    ])
                    console.log(task, tasks, buttonState);
                } else {
                    return null
                }  
                
            }} type='submit'>
                <span className='text' >Add Task</span>
            </button>
        </form>
        {buttonState ? <Overview tasks={tasks} deleteTask={deleteTask} setTasks={setTasks}/> : null}
        <ClearAllButton tasks={tasks} clearTasks={clearTasks}/>
    </>
    )
}