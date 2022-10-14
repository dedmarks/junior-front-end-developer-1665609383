import React, { useState } from 'react'
import { ReactComponent as Tab } from '../svg/tab.svg';
import ActiveCard from './Cards/ActiveCard';
import NewCard from './Cards/NewCard';
import ReadCard from './Cards/ReadCard';
import {tasks} from "../data/tasks.js"
import moment from "moment"
import { ReactComponent as Lock } from '../svg/lock.svg';
import { ReactComponent as Check } from '../svg/check.svg';
import { ReactComponent as Arrow } from '../svg/arrowblue.svg';
import { ReactComponent as ProfilePicture } from '../svg/profile_pic.svg';

const BuisnessContext = () => {

  const [state, setstate] = useState(4);
  const [card, setCard] = useState(2); 
  const [active, setActive] = useState(true)
  const [active1, setActive1] = useState(true)
  const [active2, setActive2] = useState(false)

  var currentdate = new Date(); 

  var datetime = currentdate.getFullYear() + "-"
              + (currentdate.getMonth()+1)  + "-" 
              + currentdate.getDate() + ""  
            
            
   let formatter = new Intl.DateTimeFormat("en-GB", {
    year: "numeric",
    month: "numeric",
    day: "2-digit"
  });

  let formatter2 = new Intl.DateTimeFormat("en-GB", {
    month: "long",
    day: "2-digit"
  });

  let Timeformatter = new Intl.DateTimeFormat("en-GB", {
    hour: "numeric",
    minute: "numeric",
  });

  let a = formatter.format(Date.parse(tasks[state-1].buisness_context[card-1].created_at))

  let dateArr = a.split('/')
  let currDateArr = datetime.split('-')

  var c = moment([currDateArr[0], currDateArr[1], currDateArr[2]]);
  var b = moment([dateArr[2], dateArr[1], dateArr[0]]);

  let difference = c.diff(b, 'days')

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
            <div className="ok">
            <Tab className="tab"/>
            <h1 className="tabText">Buisness Context</h1>
            </div>
            <div className="line"/>
        </div>
        <div className="inboxContainer">
            <div className="left">
              {tasks[state-1].buisness_context.map(item => (
              item.status === "Active" ? <div onClick={() => setCard(item.id) & setActive(false) & setActive1(true) & setActive2(false)}><ActiveCard inbox={item} active={active} active1={active1} active2={active2}/></div> : 
              item.status === "New" ? <div onClick={() => setActive(false) & setActive1(false) & setActive2(false) & setCard(item.id)}><NewCard active={active} inbox={item} active1={active1} active2={active2}/></div> : 
              <div onClick={() => setCard(item.id) & setActive(false) & setActive1(false) & setActive2(true)}><ReadCard inbox={item} active1={active1} active2={active2} active={active}/></div>
              ))}
            </div>
            <div className="right">
              <h1 className="msgTitle">{tasks[state-1].buisness_context[card-1].title}</h1>
              <div className="authorInfo">
                <div className="authorPic">
                  <ProfilePicture/>
                </div>
                  <h3 className="Author">{tasks[state-1].buisness_context[card-1].author}</h3>
                  <div className="msgDot"/>
                  <h3 className="boxDate">{difference === 0 ? "Today, " + formatter2.format(Date.parse(tasks[state-1].buisness_context[card-1].created_at)): difference + ' days ago, ' + formatter2.format(Date.parse(tasks[state-1].buisness_context[card-1].created_at))}</h3>
                  <div className="msgDot"/>
                  <h3 className="boxAuthor">{Timeformatter.format(Date.parse(tasks[state-1].buisness_context[card-1].created_at))}</h3>
              </div>
              <p className="mainMessage " dangerouslySetInnerHTML={{ __html: tasks[state-1].buisness_context[card-1].message}} />
            </div>
        </div>
    </div>
    </div>
  )
}

export default BuisnessContext