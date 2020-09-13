import React, { useState, useRef } from 'react';
import { Card } from './Card';
import './Cards.scss';

const NUMBER_OF_CARDS = 12;

export const Cards = () => {
  const [cardStatus, setCardStatus] = useState(() => {
    const cards = [];
    let openedCount = 0;
    for (let i = 0; i < NUMBER_OF_CARDS; i++) {
      const newCard = Math.random() < 0.5;
      cards.push(newCard);
      if (newCard) {
        openedCount++;
      }
    }
    if (openedCount % 2 == 0) {
      cards[NUMBER_OF_CARDS - 1] = !cards[NUMBER_OF_CARDS - 1];
    }
    return cards;
  });
  const initialCards = useRef(cardStatus);

  const [removedCards, setRemovedCards] = useState([]);

  const handleCardClick = (position) => {
    if (position > 0 && position < NUMBER_OF_CARDS - 1) {
      setCardStatus((prevState) => {
        const newCardStatus = prevState.map((card, index) => {
          if (index === position - 1 || index === position + 1) {
            return !card;
          }
          return card;
        });
        return newCardStatus;
      });
    } else if (position === 0) {
      setCardStatus((prevState) => {
        const newCardStatus = prevState.map((card, index) => {
          if (index === position + 1) {
            return !card;
          }
          return card;
        });
        return newCardStatus;
      });
    } else if (position === NUMBER_OF_CARDS - 1) {
      setCardStatus((prevState) => {
        const newCardStatus = prevState.map((card, index) => {
          if (index === position - 1) {
            return !card;
          }
          return card;
        });
        return newCardStatus;
      });
    }
    setRemovedCards((prevState) => [...prevState, position]);
  };

  const handleRestart = () => {
    setCardStatus(initialCards.current);
    setRemovedCards([]);
  };

  return removedCards.length === NUMBER_OF_CARDS ? (
    <div>Done, refresh</div>
  ) : (
    <>
      <div className='container'>
        {cardStatus.map((card, index) => (
          <Card
            onCardClick={handleCardClick}
            key={index}
            id={index}
            opened={card}
            visible={!removedCards.includes(index)}
          />
        ))}
      </div>
      <button onClick={handleRestart}>Restart</button>
    </>
  );
};
