import uniqid from 'uniqid';
import Overview from './Overview';
import ClearAllButton from './ClearAllButton';
import React from 'react';
import { useState } from 'react';

export default function List () {
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([]);
    const [buttonState, setButtonState] = useState(false);

    // const storeTasksLocaleStorage = ({tasks}) => {
    //     let LOCAL = window.localStorage;
    //     LOCAL.setItem(tasks);
    //     console.log(LOCAL);
    // }

    const clearTasks = () => {
        return setTasks([])
    }

    const deleteTask = () => {
        setTasks(tasks.filter(t => t.id !== task.id))
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
                    console.log(task, tasks, buttonState);
                    setButtonState(true);
                    setTask('');
                    setTasks([
                        ...tasks,
                    {id: uniqid(), task: trimString(task)}
                    ])
                } else {
                    return null
                }  
                
            }} type='submit'>
                <span className='text' >Add Task</span>
            </button>
        </form>

        {/* set tasks is being called here to update state when list is created, 
        needs to only be called when there are enough items in list and only on click of delete task button */}
        {buttonState ? <Overview tasks={tasks} setTasks={setTasks}/> : null}

        <ClearAllButton tasks={tasks} clearTasks={clearTasks}/>
    </>
    )
}