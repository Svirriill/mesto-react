import React from 'react'
import esc from "../images/Close_Icon.png";

class PopupWithForm extends React.Component {
  render() {
    return (
      <section className={`popup popup_${this.props.name} ${
        this.props.isOpen && 'popup_opened'
        }`}>
        <div className="popup__container">
          <h3 className="popup__title">{this.props.title}</h3>
          <form className={`popup__form popup__form_${this.props.name}`} action="#">
            {this.props.children}
            <button className="popup__button" type="submit">{this.props.submit}</button>
            <button className="popup__button-esc" type="button">
              <img src={esc} alt="кнопка закрытия окна редиктирования" onClick={this.props.onClose}
                className="popup__esc" />
            </button>
          </form>
        </div>
      </section>
    );
  }
}

export default PopupWithForm;