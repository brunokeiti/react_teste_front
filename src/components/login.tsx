import React from 'react';

import pinap from '../images/fruits/Pinap_Berry.png';
import iconEmail from '../images/icon-email.png';
import iconPass from '../images/icon-pass.png';

class Login extends React.Component<any, any> {
  public state = { email: "", pass: "" }
  constructor(props: any) {
    super(props);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePass = this.handleChangePass.bind(this);
  }
  render() {
    return (
      <div className="login">
        <div className="modal-overlay" onClick={this.props.toggle} />
        <div className="modal-container">
          <img className="login-pinap" src={pinap}/>
          <div className="login-inputDiv">
            <img className="login-icon" src={iconEmail} />
            <input type="text" placeholder="e-mail" value={this.state.email} onChange={this.handleChangeEmail}/>
          </div>
          <div className="login-inputDiv">
            <img className="login-icon" src={iconPass} />
            <input type="password" placeholder="senha" value={this.state.pass} onChange={this.handleChangePass} />
          </div>
          <button onClick={() => this.props.validate(this.state.email, this.state.pass)}>Login</button>
          {this.props.alert !== "" &&
            <p className="login-alert">{this.props.alert}</p>
          }
        </div>
      </div>
    );
  }
  handleChangeEmail(event:any) {
    this.setState({email: event.target.value});
  }
  handleChangePass(event:any) {
    this.setState({pass: event.target.value});
  }


}

export default Login;