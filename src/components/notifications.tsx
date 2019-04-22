import React from 'react';
import data from '../mock.json';
import close from '../images/icon-close.png';

class Notifications extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

  }
  render() {
    const notification = data.notifications;

    return (
      <div className="notifications">
        <div className="modal-overlay" onClick={this.props.toggle} />
        <div className="modal-container">
          <div className="notifications-container">
          {
            notification.map((notification,index) => 
              <div key={index} className="notifications-message">
                {notification.message}
              </div>
            )
          }
          </div>
          <img className="modal-close" src={close} onClick={this.props.toggle}/>
        </div>
      </div>
    );
  }

}

export default Notifications;