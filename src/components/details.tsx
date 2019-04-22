import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
import data from '../mock.json';
import close from '../images/icon-close.png';

class Details extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

  }
  render() {
    const fruit = data.fruits[this.props.index];
    const image = require('../images/fruits/' + fruit.image + '.png');

    return (
      <div className="details">
        <div className="modal-overlay" onClick={this.props.toggle} />
        <div className="modal-container">
          <img className="details-image" src={image} />
          <h2>{fruit.name}</h2>
          <p>{fruit.description}</p>
          <div className="details-rating">
            <StarRatingComponent 
              name="rate1" 
              starCount={5}
              value={fruit.rating}
              editing={false}
            />
          </div>
          <img className="modal-close" src={close} onClick={this.props.toggle}/>
        </div>
      </div>
    );
  }

}

export default Details;