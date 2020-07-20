import React from 'react';
  
function DisplayQuote({ quote }) {
  return (
    <div className="DisplayQuote">
      <img
        src={quote.image}
        alt={quote.character}
      />
        <p>Quote: {quote.quote}</p>
        <p>Name: {quote.character}</p>
    </div>
  );
};
  
export default DisplayQuote;