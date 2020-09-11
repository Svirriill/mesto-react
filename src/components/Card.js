import React from 'react';

class Card extends React.Component {
  handleClick = () => {
    this.props.onCardClick(this.props);
  };

  render() {
    const { card } = this.props;
    return (
      <li className="element">
        <img className="element__image" src={card.link}
          alt={card.name} onClick={this.handleClick} />
        <button className="element__delete element__delete_button">
          <img className="element__remove element__remove_image" src="./images/Trash.svg" alt="удалить элемент" />
        </button>
        <div className="element__text">
          <h3 className="element__title">{card.name}</h3>
          <div className="element__like-container">
            <button className="element__like"></button>
            <div className="element__like-number">{card.likes.length}</div>
          </div>
        </div>
      </li>
    );
  }
}

export default Card;
