import React, { useState, useEffect } from "react";

import "./App.css";

const array = [1, 2, 3, 4, 5, 6];
const arrayCopy = [...array];

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

const App = () => {
  // return React.createElement("div", {
  //   className: "App",
  //   children: React.createElement(ListComponent),
  // });

  const element = (
    <div className="App">
      <ListComponent />
      {/* <ListComponent /> */}
      {/* <ListComponent /> */}
    </div>
  );

  return element;
};

export default App;
