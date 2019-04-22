import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
import data from '../mock.json';
import close from '../images/icon-close.png';

class AddEdit extends React.Component<any, any> {
  public state = { name: "", description: "", rating: 0 }
  constructor(props: any) {
    super(props);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeDescription = this.handleChangeDescription.bind(this);
  }
  render() {
    return (
      <div className="addEdit">
        <div className="modal-overlay" onClick={this.props.toggle} />
        <div className="modal-container">
          {this.props.index < 0 &&
            <h2>Novo Produto</h2>
          }
          {this.props.index >= 0 &&
            <h2>Editar Produto</h2>
          }
          <label className="addEdit-label">Nome</label><br />
          <input type="text" value={this.state.name} onChange={this.handleChangeName}/>
          <label className="addEdit-label">Descrição</label><br />
          <textarea value={this.state.description} onChange={this.handleChangeDescription}/>
          <label className="addEdit-label">Imagem</label><br />
          <input type="file" />
          <div className="addEdit-rating">
            <StarRatingComponent 
              name="rate1" 
              starCount={5}
              value={this.state.rating}
              onStarClick={this.onStarClick.bind(this)}
            />
          </div>

          {this.props.index < 0 &&
              <button onClick={this.props.toggle}>Cadastrar</button>
          }
          {this.props.index >= 0 &&
            <button onClick={this.props.toggle}>Atualizar</button>
          }

          <img className="modal-close" src={close} onClick={this.props.toggle}/>

        </div>
      </div>
    );
  }
  componentDidMount(){
    const fruit = data.fruits[this.props.index];
    this.props.index >= 0
      ? this.setState({
        name: fruit.name,
        description: fruit.description,
        rating: fruit.rating
      })
      : this.setState({
        name: "",
        description: "",
        rating: 0
      });
  }
  handleChangeName(event:any) {
    this.setState({name: event.target.value});
  }
  handleChangeDescription(event:any) {
    this.setState({description: event.target.value});
  }
  onStarClick(nextValue:number, prevValue:number, name:string) {
    this.setState({rating: nextValue});
  }

}

export default AddEdit;