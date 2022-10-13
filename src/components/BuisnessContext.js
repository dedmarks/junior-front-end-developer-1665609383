import React, { useState } from 'react'
import { ReactComponent as Tab } from '../svg/tab.svg';
import ActiveCard from './Cards/ActiveCard';
import NewCard from './Cards/NewCard';
import ReadCard from './Cards/ReadCard';
import {tasks} from "../data/tasks.js"
import { ReactComponent as Lock } from '../svg/lock.svg';
import { ReactComponent as Check } from '../svg/check.svg';
import { ReactComponent as Arrow } from '../svg/arrowblue.svg';
import { ReactComponent as ProfilePicture } from '../svg/profile_pic.svg';

const BuisnessContext = ({index}) => {

  const [state, setstate] = useState(4);

  console.log(state)


   let formatter = new Intl.DateTimeFormat("en-GB", {
    year: "numeric",
    month: "long",
    day: "2-digit"
  });

  let Timeformatter = new Intl.DateTimeFormat("en-GB", {
    hour: "numeric",
    minute: "numeric",
  });


  var currentdate = new Date(); 
  var datetime = currentdate.getFullYear() + "-"
              + (currentdate.getMonth()+1)  + "-" 
              + currentdate.getDate() + "T"  
              + (currentdate.getHours() + 2) + ":"  
              + currentdate.getMinutes() + ":" 
              + currentdate.getSeconds() + "."
              + currentdate.getMilliseconds() + "Z";
              

  return (
    <div className="wrapper">
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
    <div className="buisnessWrapper">  
        <div className="buisnessContainer">
            <Tab className="tab"/>
            <h1 className="tabText">Buisness Context</h1>
        </div>
        <div className="inboxContainer">
            <div className="left">
              {tasks[state-1].buisness_context.map(item => (
              item.status === "Active" ? <ActiveCard inbox={item}/> : item.status === "New" ? <NewCard inbox={item}/> : <ReadCard inbox={item}/>
              ))}
            </div>
            <div className="right">
              <h1 className="msgTitle">{tasks[state-1].buisness_context[1].title}</h1>
              <div className="authorInfo">
                <div className="authorPic">
                  <ProfilePicture/>
                </div>
                  <h3 className="Author">{tasks[state-1].buisness_context[1].author}</h3>
                  <div className="msgDot"/>
                  <h3 className="boxDate">{formatter.format(Date.parse(tasks[state-1].buisness_context[1].created_at))}</h3>
                  <div className="msgDot"/>
                  <h3 className="boxAuthor">{Timeformatter.format(Date.parse(tasks[state-1].buisness_context[1].created_at))}</h3>
              </div>
              <p className="mainMessage " dangerouslySetInnerHTML={{ __html: tasks[state-1].buisness_context[1].message}} />
            </div>
        </div>
    </div>
    </div>
  )
}

export default BuisnessContext