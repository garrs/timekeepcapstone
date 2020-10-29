import React from 'react'
import moment from 'moment'

const Notifications = (props) => {
  const {notifications} = props;
  return (
    <div className = "section">
      <div className = "card z-depth-0">
        <div className = "card-content">
          <span className = "card-title">Notifications</span>
          <ul className ="notifications" style={{overflowY: 'scroll', height: "28rem"}}>
            {notifications && notifications.map( item => {
              return (
                <li key={item.id}>
                  {/* <span className="pink-text">{item.user} <br /></span> */}
                  <span>{item.presence ? <span className="green-text"> {item.content} </span> : <span className="teal-text">{item.content} </span> }</span>
                  <div className="grey-text note-date"> 
                    {moment(item.recentScan.toDate()).fromNow()}
                  </div>
                </li>
              )
            })}
          </ul>
        </div> 
      </div>  
    </div>
  )
}

export default Notifications