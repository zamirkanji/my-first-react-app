import React from "react";

export default function ClearAllButton ({tasks, clearTasks}) {
    return (
        <div id='clear-all-container'>    
            {tasks.length > 0 ? 
                <button id='clear-all' onClick={clearTasks}>
                    <span className="text-black">Clear All Items</span>
                </button> : null
            }
        </div>
    )
}