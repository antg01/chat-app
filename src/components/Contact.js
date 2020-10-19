import React from 'react';
import './Contact.css';



class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            online: false,
        }
    };
    render() {

     const { avatar, name } = this.props

      return (

        <div className="Contact">
                <img className="avatar" src={this.props.avatar} alt="user avatar"/>
            <div>
                <h4 className="name">
                    {this.props.name}
                </h4>            
                <div className="status" onClick = {event => {
                        const offline = !this.state.online;
                        this.setState({online : offline})
                        }}>
                    <div 
                        className={this.state.online? 'status-online' : 'status-offline'} 
                        >
                    </div>
                    {this.state.online? <p className="status-text">Online</p> : <p className="status-text">Offline</p>}
                </div> 
            </div>
        </div>
        )
    }
}

export default Contact;