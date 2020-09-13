import React, { useState } from 'react';
import { Card } from './Card';
import './Cards.scss';

const NUMBER_OF_CARDS = 20;

export const Cards = () => {
  const [cardStatus, setCardStatus] = useState(() => {
    const cards = [];
    let openedCount = 0;
    for (let i = 0; i < NUMBER_OF_CARDS; i++) {
      const newCard = Math.random() < 0.5;
      if (openedCount % 2 === 0 && i === NUMBER_OF_CARDS - 1 && !newCard) {
        cards.push(!newCard);
      } else {
        cards.push(newCard);
      }
      if (newCard) {
        openedCount++;
      }
    }
    return cards;
  });
  const [removedCards, setRemovedCards] = useState([]);

  const handleCardClick = (position) => {
    if (position > 0 && position < cardStatus.length - 1) {
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
    } else if (position === cardStatus.length - 1) {
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

  return removedCards.length === NUMBER_OF_CARDS ? (
    <div>Done, refresh</div>
  ) : (
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
  );
};
