import React, { useState, useEffect } from "react";

const ListItemComponent = ({ index, item, onDelete }) => {
  const [localStateIndex] = useState(index + 1);

  useEffect(() => {
    console.log("MOUNT");

    return () => {
      console.log("UNMOUNT");
    };
  }, []);

  // console.log("ListItemComponent");

  return (
    <li>
      {item} initial index: {localStateIndex}
      <span
        className="cursor-pointer delete-button"
        onClick={() => onDelete(index)}
      >
        ❌
      </span>
    </li>
  );
};

// function namedFunc() {
//    this;
// }

// var / let / const
// var anonFunc = function () {};
// let anonFunc = function () {};
// const anonFunc = function () {};

const lambda = () => {};

// this;
// What is this?

const ListComponent = () => {
  const [items, setItems] = useState([]);

  const handleAdd = () => {
    const newItems = [...items, items.length + 1];
    setItems(newItems);
  };

  const handleDelete = index => {
    const newItems = items.filter((item, i) => i !== index);
    setItems(newItems);
  };

  return (
    <ul>
      <li>
        <button onClick={handleAdd}>Add</button>
      </li>
      <br />

      {items.map((item, index) => (
        <ListItemComponent
          // key={`${item}__${index}`}
          key={item}
          item={item}
          index={index}
          onDelete={handleDelete}
        />
      ))}
    </ul>
  );
};

export default ListComponent;
