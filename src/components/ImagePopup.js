import React from 'react';
import esc from "../images/Close_Icon.png";

class ImagePopup extends React.Component {
    render() {
        return (
            <section className={`popup ${this.props.isOpen && 'popup_opened'}`}>
                <section className="popup__figure popup__figure_form">
                    <img className="popup__image popup__image_opened" src={this.props.link}
                        alt={this.props.name}
                    />
                    <p className="popup__figcaption">{this.props.name}</p>
                    <button className="popup__button-esc" type="button">
                        <img src={esc} alt="кнопка закрытия " className="popup__esc popup__esc_image" onClick={this.props.onClose}
                        />
                    </button>
                </section>
            </section>
        )
    }
}

export default ImagePopup