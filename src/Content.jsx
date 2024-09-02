import React from "react";
import Itemslist from "./Itemslist";

const Content = ({ items, setItems, handleCheck, handleDelete }) => {
  return (
    <>
      {items.length ? (
        <Itemslist
          items={items}
          setItems={setItems}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ) : (
        <p>No list items added</p>
      )}
    </>
  );
};

export default Content;