import React from 'react';
import PropTypes from 'prop-types';
import './Card.scss';

export const Card = (props) => (
  <div
    onClick={
      props.visible && props.opened ? () => props.onCardClick(props.id) : null
    }
    className={`card ${
      props.visible ? (props.opened ? 'opened' : 'unopened') : 'invisible'
    }`}
  />
);

Card.propTypes = {
  id: PropTypes.number,
  className: PropTypes.string,
  onCardClick: PropTypes.func,
  visible: PropTypes.bool,
};
