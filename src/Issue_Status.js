import React from 'react';

function Issue_Status({ status }) {
  let statusImage;

  switch (status) {
    case 'new':
      statusImage = '/img/new.svg';
      break;
    case 'assigned':
      statusImage = '/img/assigned.svg';
      break;
    case 'fixed':
      statusImage = '/img/fixed.svg';
      break;
    case 'resolved':
      statusImage = '/img/resolved.svg';
      break;
    case 'closed':
      statusImage = '/img/closed.svg';
      break;
    default:
      statusImage = '/img/default.svg';
  }

  return (
    <img src={statusImage} alt={`${status} status`} />
  );
}

export default Issue_Status;
