import React, { Component } from 'react'
import { connect } from 'react-redux';
import { loadCard, getInfoFromServer } from './actions';

export class Card extends Component {
  state = {};

  onClick = () => {
    const { id, name } = this.props;  
    this.props.loadCards2(id);
  }  

  render() {
    const { cards, status, id, name } = this.props;
    const card = this.props.cards 
        && this.props.cards.filter( card => {
            console.log(card, this.props.id);
            return card.id === this.props.id-1 
        });

    return (
      <div>          
        CARD {status}
        <button onClick={this.onClick}>Agregar</button>
        {card && card.map(card => <div>{card.name}</div>)} 
      </div>
    )
  }
}

const stateToMaps = (store, ownProps) => {
    return {
        cards: store.cards,
        id: !ownProps.id ? store.cards.length: ownProps.id,
        status: store.status,
    };
};

const dispatchToProps = dispatch => ({
    loadCard: loadCard,
    loadCards2: (id) => getInfoFromServer(id, dispatch),
});

export default connect(stateToMaps, dispatchToProps)(Card);



