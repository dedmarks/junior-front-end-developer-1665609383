import React from 'react'

const ReadCard = ({inbox, active, active1, active2}) => {

  let message = inbox.message.replace('<br />', '')

  let formatter = new Intl.DateTimeFormat("en-GB", {
    month: "short",
    day: "2-digit", 
  });

  return (
    <>
    {active2 === false ? (
 <div className="msgCardRead">
 <div className="topActive">
   <h3 className="boxAuthor">{inbox.author}</h3>
   <div className="dot"/>
   <h3 className="boxDate">{formatter.format(Date.parse(inbox.created_at))}</h3>
 </div>
 <h2 className="boxTitleActive">{inbox.title}</h2>
 <h3 className="boxMessage">{message.length > 100 ?
 `${message.substring(0, 100)}...` : message
}
</h3>
</div>
    ) : (
      <div className="msgCardActive">
      <div className="topActive">
        <h3 className="boxAuthor">{inbox.author}</h3>
        <div className="dot"/>
        <h3 className="boxDate">{formatter.format(Date.parse(inbox.created_at))}</h3>
      </div>
      <h2 className="boxTitleActive">{inbox.title}</h2>
      <h3 className="boxMessage">{message.length > 100 ?
      `${message.substring(0, 100)}...` : message
    }
  </h3>
    </div>    
    )}
  </>
  )
}

export default ReadCard