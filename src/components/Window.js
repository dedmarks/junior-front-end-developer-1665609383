import React from 'react'
import { ReactComponent as Lock } from '../svg/lock.svg';
import { ReactComponent as Check } from '../svg/check.svg';
import { ReactComponent as Arrow } from '../svg/arrowblue.svg';
import {tasks} from "../data/tasks.js"

const Window = () => {
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
                <h1 className="taskName">{item.title}</h1>
            </div>
            ))}   
        </div>
    </div>
  )
}

export default Window