import React from 'react';

function Round({ title, totalPoints, children }) {
  return (
    <div className="round">
      <h2>{ title } <small>({totalPoints} Points)</small></h2>

      {children}
    </div>
  );
}

export default Round;
