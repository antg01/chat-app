import React from 'react';
import './Contact.css';


class Contact extends React.Component {
    render() {
        const {avatar, name, isOnline} = this.props;
      return (
        <div className="Contact">
                <img className="avatar" src={avatar} alt="user avatar"/>
            <div>
                <h4 className="name">
                    {name}
                </h4>            
                <div className="status">    
                    <div className={isOnline? 'status-online' : 'status-offline'}></div>
                    {isOnline? <p className="status-text">Online</p> : <p className="status-text">Offline</p>}
                </div> 
            </div>
        </div>
       )
    }
 }

export default Contact;