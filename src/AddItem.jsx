import React from "react";
import { FaPlus } from "react-icons/fa";
import { useRef } from "react";

const AddItems = ({ newItem, setNewItem, handleSubmit }) => {
  let input = useRef();
  return (
    <form className="addForm" onSubmit={handleSubmit}>
      <input
        type="text"
        id="addItem"
        ref={input}
        autoFocus
        placeholder="Add Item"
        value={newItem}
        autoComplete="off"
        onChange={(e) => setNewItem(e.target.value)}
      />
      <label htmlFor="addItem">Search</label>
      <button
        type="submit"
        aria-label="Add Item"
        onClick={() => input.current.focus()}
      >
        <FaPlus />
      </button>
    </form>
  );
};

export default AddItems;