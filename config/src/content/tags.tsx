import React from 'react';
import PropTypes from 'prop-types';

const StatusTag = ({ status, size }) => {
  // Mapeamento de status para classes CSS
  const statusClasses = {
    'Concluido': 'c1',
    'Em andamento': 'c2',
    'Perdida': 'c3',
    'Não iniciada': 'c4',
    'Reprovado': 'c5',
  };

  // Obtenha a classe correspondente ao status
  const statusClass = statusClasses[status] || '';

  return (
    <p className={`_tag ${size} ${statusClass}`}>
      {status}
    </p>
  );
};

StatusTag.propTypes = {
  status: PropTypes.oneOf([
    'Concluido',
    'Em andamento',
    'Perdida',
    'Não iniciada',
    'Reprovado'
  ]).isRequired,
  size: PropTypes.oneOf(['sm', 'md', 'lg']).isRequired,
};

export default StatusTag;



