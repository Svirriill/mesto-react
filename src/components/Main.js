import React from 'react';
import { api } from '../utils/Api';
import Card from './Card';
import edit from "../images/Edit_Button.svg";
import add from "../images/Vector_button.svg";

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: '',
      userDescription: '',
      userAvatar: '',
      cards: [],
    };
  }

  componentDidMount() {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([userData, cardData]) => {
        this.setState({
          userName: userData.name,
          userDescription: userData.about,
          userAvatar: userData.avatar,
          cards: cardData,
        });
      })
      .catch(console.error)
  }

  onCardClick = (card) => {
    this.props.handleCardClick(card);
  };

  render() {
    return (
      <div className="main">
        <section className="profile">
          <div className="profile__image-container">
            <img className="profile__image" src={this.state.userAvatar}
              onClick={this.props.onEditAvatar}
              alt="Аватар" />
          </div>.

                <div className="profile__info">
            <h1 className="profile__title">{this.state.userName}</h1>
            <img className="profile__button-edit" src={edit} alt="редактирование кнопки" onClick={this.props.onEditProfile}
            />
            <h3 className="profile__subtitle">{this.state.userDescription}</h3>
          </div>
          <button className="profile__button" type="button" onClick={this.props.onAddPlace}>
            <img src={add} alt="кнопка '+'" />
          </button>
        </section>
        <ul className="elements">
          {this.state.cards.map((card) => (
            <Card key={card._id} card={card} onCardClick={this.onCardClick} />
          ))}
        </ul>
      </div>
    );
  }
}

export default Main