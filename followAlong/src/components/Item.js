import React, { useState } from 'react';

const Item = props => {
  // const [item, setItem] = useState({
  //   name: 'Bananas',
  //   id: 123,
  //   purchased: false
  // });

  const handleClick = () => {
    props.toggleItem(props.item.id);
    // setItem({
    //   ...item,
    //   purchased: !item.purchased
    // });
  }

  return (
    <div onClick={handleClick} className={`item${props.item.purchased ? ' purchased' : ''}`}>
      <p>{props.item.name}</p>
    </div>
  );
};

export default Item;