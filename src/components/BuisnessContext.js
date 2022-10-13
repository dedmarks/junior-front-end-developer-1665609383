import React from 'react'
import { ReactComponent as Tab } from '../svg/tab.svg';
import ActiveCard from './Cards/ActiveCard';
import NewCard from './Cards/NewCard';
import ReadCard from './Cards/ReadCard';
import {tasks} from "../data/tasks.js"
import { ReactComponent as ProfilePicture } from '../svg/profile_pic.svg';

const BuisnessContext = () => {

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
    <div className="buisnessWrapper">  
        <div className="buisnessContainer">
            <Tab className="tab"/>
            <h1 className="tabText">Buisness Context</h1>
        </div>
        <div className="inboxContainer">
            <div className="left">
              <NewCard/>
              <ActiveCard/>
              <ReadCard/>
            </div>
            <div className="right">
              <h1 className="msgTitle">{tasks[0].buisness_context[1].title}</h1>
              <div className="authorInfo">
                <div className="authorPic">
                  <ProfilePicture/>
                </div>
                  <h3 className="Author">{tasks[0].buisness_context[1].author}</h3>
                  <div className="msgDot"/>
                  <h3 className="boxDate">{formatter.format(Date.parse(tasks[0].buisness_context[1].created_at))}</h3>
                  <div className="msgDot"/>
                  <h3 className="boxAuthor">{Timeformatter.format(Date.parse(tasks[0].buisness_context[1].created_at))}</h3>
              </div>
              <p className="mainMessage " dangerouslySetInnerHTML={{ __html: tasks[0].buisness_context[1].message}} />
            </div>
        </div>
    </div>
  )
}

export default BuisnessContext