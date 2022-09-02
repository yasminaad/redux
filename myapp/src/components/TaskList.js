import React,{ useState } from 'react'
import { useSelector } from 'react-redux'
import TaskCard  from './TaskCard'

const TaskList = () => {
    const listOfTasks = useSelector(state => state.TaskReducer.todos);
    const [txt, setTxt] = useState("")
    const search=useState("")
    return (
        <div className="search"> 
        <input type="text" onChange={(e) => setTxt(e.target.value)} value={txt} />
        <button onClick={search}>search</button>
        <div className="todo-list">
            {
                listOfTasks
                .filter(el => el.task.toUpperCase().includes(txt.toUpperCase()))
                .map((el, index) => <TaskCard el={el} key={index} />)
            }
        </div>
        </div>
    )
}

export default TaskList