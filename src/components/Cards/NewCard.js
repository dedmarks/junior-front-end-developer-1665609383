import React from 'react'

const NewCard = () => {
  return (
    <div className="msgCardNew">
    <div className="top">
      <div className="bluerec">
        <h3 className="recText">New</h3>
      </div>
      <h3 className="boxAuthor">Olga Nelson</h3>
      <div className="dot"/>
      <h3 className="boxDate">Dec 17</h3>
    </div>
    <h2 className="boxTitle">New sprint, tasks and intro information.</h2>
    <h3 className="boxMessage">Hi Eric, congratulations on completing the previous assignment. This time you will have to focus on...</h3>
  </div>
  )
}

export default NewCard