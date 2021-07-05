import React, { useState } from 'react';

const Item = props => {
  const [item, setItem] = useState({
    name: 'Bananas',
    id: 123,
    purchased: false
  });

  const handleClick = () => {
    console.log("item: " + item.name);
    //change purchased to true
    setItem({
      ...item,
      purchased: item.purchased ? false : true
    });
  }

  return (
    <div onClick={handleClick} className={`item${item.purchased ? ' purchased' : ''}`}>
      <p>{item.name}</p>
    </div>
  );
};

export default Item;