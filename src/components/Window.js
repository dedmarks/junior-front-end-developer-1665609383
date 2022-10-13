import React, { useState } from 'react'
import { ReactComponent as Lock } from '../svg/lock.svg';
import { ReactComponent as Check } from '../svg/check.svg';
import { ReactComponent as Arrow } from '../svg/arrowblue.svg';
import {tasks} from "../data/tasks.js"

const Window = () => {

  const [state, setstate] = useState(4);

  console.log(state)
  return (
    <div className="container">
        <div className="header">
            <h1 className="text">YOUR TASKS</h1>
        </div>
        <div className="separator"/>
        <div className="content">
            {tasks.map(item => (
            <div className="row">
            <div className="sidebar">
                {item.status === "completed" ? <Check className="arrow"/> : (item.status === "active" ? <Arrow className="arrow"/> : <Lock className="arrow"/>)}
            </div>    
            {item.status === "completed" ? <h1 onClick={() => setstate(item.id)} className="taskNameCompleted">{item.title}</h1> : (item.status === "active" ?  <h1 onClick={() => setstate(item.id)} className="taskNameActive">{item.title}</h1> :  <h1 className="taskNameBlocked">{item.title}</h1>)}
            </div>
            ))}   
        </div>
    </div>
  )
}

export default Window