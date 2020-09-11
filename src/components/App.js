import React, { useState } from 'react';
import Header from './Header'
import Footer from './Footer'
import Main from './Main';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({
    isImageOpen: false,
    link: '',
    name: '',
  });

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }

  function handleCardClick(cardData) {
    const { link, name } = cardData.card;
    setSelectedCard({ isImageOpen: true, link: link, name: name });
  }

  function closeAllPopups() {
    setEditProfilePopupOpen(false);
    setEditAvatarPopupOpen(false);
    setAddPlacePopupOpen(false);
    setSelectedCard({
      isImageOpen: false,
      link: '',
      name: '',
    });
  }

  return (
    <div className="page">
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        handleCardClick={handleCardClick}
      />
      <Footer />
      <PopupWithForm
        name='profile'
        title='Редактировать профиль'
        submit='Сохранить'
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <label htmlFor='name' className='popup__field'>
          <input
            type='text'
            className='popup__input'
            id='name'
            name='name'
            placeholder='Имя'
            minLength='2'
            maxLength='40'
            pattern='[А-Яа-яA-Za-z -]{1,}'
            required
          />
          <span className='popup__input-error' id='name-input-error'></span>
        </label>
        <label htmlFor='about' className='popup__field'>
          <input
            type='text'
            className='popup__input'
            id='about'
            name='about'
            placeholder='О себе'
            minLength='2'
            maxLength='200'
            required
          />
          <span className='popup__input-error' id='job-input-error'></span>
        </label>
      </PopupWithForm>

      <PopupWithForm
        name='photo'
        title='Новое место'
        submit='Создать'
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <label htmlFor='name' className='popup__field'>
          <input
            className='popup__input'
            id='name'
            name='name'
            placeholder='Название'
            minLength='1'
            maxLength='30'
            required
          />
          <span className='popup__input-error' id='place-input-error'></span>
        </label>
        <label htmlFor='link' className='popup__field'>
          <input
            type='url'
            className='popup__input'
            id='link'
            name='link'
            placeholder='Ссылка на картинку'
            required
          />
          <span className='popup__input-error' id='link-error'></span>
        </label>
      </PopupWithForm>

      <PopupWithForm
        name='avatar'
        title='Обновить аватар'
        submit='Сохранить'
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <label htmlFor='url' className='popup__field'>
          <input
            type='url'
            className='popup__input'
            id='url'
            name='url'
            placeholder='Ссылка на аватар'
            required
          />
          <span className='popup__input-error' id='url-error'></span>
        </label>
      </PopupWithForm>

      <PopupWithForm
        name='delete'
        title='Вы уверены?'
        submit='Да'
        onClose={closeAllPopups}
      ></PopupWithForm>

      <ImagePopup
        name={selectedCard.name}
        link={selectedCard.link}
        onClose={closeAllPopups}
        isOpen={selectedCard.isImageOpen}
      />
    </div>
  );
}

export default App;
