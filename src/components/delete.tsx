import React from 'react';
import data from '../mock.json';
import close from '../images/icon-close.png';

class Delete extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

  }
  render() {
    const fruit = data.fruits[this.props.index];
    const image = require('../images/fruits/' + fruit.image + '.png');

    return (
      <div className="delete">
        <div className="modal-overlay" onClick={this.props.toggle} />
        <div className="modal-container">
          <img className="delete-image" src={image} />
          <p>Deseja mesmo deletar</p>
          <h2>{fruit.name}?</h2>
          <button onClick={this.props.toggle}>Deletar</button>
          <img className="modal-close" src={close} onClick={this.props.toggle}/>
        </div>
      </div>
    );
  }

}

export default Delete;