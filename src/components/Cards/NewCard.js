import React from 'react'

const NewCard = ({inbox}) => {

  let message = inbox.message.replace('<br />', '')

  let formatter = new Intl.DateTimeFormat("en-GB", {
    month: "short",
    day: "2-digit", 
  });

  return (
    <div className="msgCardNew">
    <div className="top">
      <div className="bluerec">
        <h3 className="recText">New</h3>
      </div>
      <h3 className="boxAuthor">{inbox.author}</h3>
      <div className="dot"/>
      <h3 className="boxDate">{formatter.format(Date.parse(inbox.created_at))}</h3>
    </div>
    <h2 className="boxTitle">{inbox.title}</h2>
    <h3 className="boxMessage">{message.length > 100 ?
    `${message.substring(0, 100)}...` : message
  }</h3>
  </div>
  )
}

export default NewCard