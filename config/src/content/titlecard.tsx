import React from 'react';
import PropTypes from 'prop-types';
import { Chalkboard, ArticleNyTimes, BookBookmark } from '@phosphor-icons/react';

const CardTitle = ({ type }) => {
  const cardTypes = {
    cursos: {
      title: 'Meus cursos',
      icon: <Chalkboard className="ico" />
    },
    anotacoes: {
      title: 'Minhas anotações',
      icon: <ArticleNyTimes className="ico" />
    },
    materias: {
      title: "Matérias do curso",
      icon: <BookBookmark className="ico" />
    }
  };

  const card = cardTypes[type];

  if (!card) {
    return null;
  }

  return (
    <div className="_card title">
      <div className="_fav">
        {card.icon}
      </div>
      <h2>{card.title}</h2>
    </div>
  );
};

CardTitle.propTypes = {
  type: PropTypes.oneOf(['cursos', 'anotacoes', "materias"]).isRequired
};

export default CardTitle;
