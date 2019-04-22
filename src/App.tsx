import React from 'react';
import { Table } from 'reactstrap';

import Login from './components/login';
import AddEdit from './components/addEdit';
import Details from './components/details';
import Delete from './components/delete';

import pinap from './images/fruits/Pinap_Berry.png';
import iconDetail from './images/icon-detail.png';
import iconEdit from './images/icon-edit.png';
import iconDelete from './images/icon-delete.png';
import iconAdd from  './images/icon-add.png';

import data from './mock.json';

class App extends React.Component<any, any> {
  public state = {
    logged: false,
    toggleLogin: false,
    alertLogin: "",
    toggleAddEdit: false,
    toggleDetails: false,
    toggleDelete: false,
    editIndex: -1
  }
  constructor(props: any) {
    super(props);
    this.login = this.login.bind(this);
    this.validate = this.validate.bind(this);

    this.toggleLogin = this.toggleLogin.bind(this);
    this.toggleAddEdit = this.toggleAddEdit.bind(this);
    this.toggleDetails = this.toggleDetails.bind(this);
    this.toggleDelete = this.toggleDelete.bind(this);
  }
  render() {
    return (
      <div className="app">
        <div className="page">
          <img className="page-pinap" src={pinap}/>
          {this.state.logged &&
            <img className="page-add" src={iconAdd} onClick={() => this.toggleAddEdit(-1)}/>
          }
          {!this.state.logged &&
            <button className="page-login" onClick={this.toggleLogin}>Login</button>
          }
          {this.state.logged &&
            <button className="page-login" onClick={this.login}>Logout</button>
          }

          <Table hover responsive size="sm" className="page-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Nome</th>
                <th>Descrição</th>
                <th>Data de criação</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {
                data.fruits.map((fruit,index) => 
                <tr key={index}>
                  <th scope="row">{fruit.number}</th>
                  <td>{fruit.name}</td>
                  <td>{fruit.description}</td>
                  <td>{fruit.date}</td>
                  {this.state.logged &&
                    <td className="page-table-options">
                      <img className="page-table-icon" src={iconDetail} onClick={() => this.toggleDetails(index)} />
                      <img className="page-table-icon" src={iconEdit} onClick={() => this.toggleAddEdit(index)} />
                      <img className="page-table-icon" src={iconDelete} onClick={() => this.toggleDelete(index)} />
                    </td>
                  }
                </tr>
                )
              }
            </tbody>
          </Table>
        </div>

        {this.state.toggleLogin &&
          <Login validate={this.validate} toggle={this.toggleLogin} alert={this.state.alertLogin}/>
        }
        {this.state.toggleAddEdit &&
          <AddEdit toggle={this.toggleAddEdit} index={this.state.editIndex}/>
        }
        {this.state.toggleDetails &&
          <Details toggle={this.toggleDetails} index={this.state.editIndex}/>
        }
        {this.state.toggleDelete &&
          <Delete toggle={this.toggleDelete} index={this.state.editIndex}/>
        }
      </div>
    );
  }

  public login(){
    this.setState({ logged: !this.state.logged });
  }
  public toggleLogin(){
    this.setState({ toggleLogin: !this.state.toggleLogin, alertLogin: "" });
  }
  public validate(email:string, pass:string){
    if (email === ""){
      this.setState({ alertLogin: "Favor preencher o campo de e-mail" });
    } else if (pass === ""){
      this.setState({ alertLogin: "Favor preencher sua senha" });
    } else {
      this.setState({ alertLogin: "" });
      this.login();
      this.toggleLogin();
    }
  }
  public toggleAddEdit(n: number){
    this.setState({ toggleAddEdit: !this.state.toggleAddEdit, editIndex: n });
  }
  public toggleDetails(n: number){
    this.setState({ toggleDetails: !this.state.toggleDetails, editIndex: n });
  }
  public toggleDelete(n: number){
    this.setState({ toggleDelete: !this.state.toggleDelete, editIndex: n });
  }

}

export default App;
