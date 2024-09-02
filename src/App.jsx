import { useEffect, useState } from "react";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import AddItems from "./AddItems";
import SearchItems from "./SearchItems";
//import requestApi from "./requestApi"; //function exported for fetching data from api

function App() {
  //let APIURL = "http://localhost:3500/items"; //incase of api request
  let [items, setItems] = useState([]);
  let [newItem, setNewItem] = useState("");
  let [searchItem, setSearchItem] = useState("");
  // if we are using fetch from server
  // let [fetchError, setFetchError] = useState(null);
  // let [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    let ListItems = JSON.parse(localStorage.getItem("todo_list")) || [];
    setItems(ListItems);
    /***************************************************/
    // fecthing from server or mock server
    /*
    let fetchItems = async () => {
      try {
        let response = await fetch(APIURL);
        if (!response.ok) throw Error("Data not Received");
        let listItems = await response.json();
        setItems(listItems);
        setFetchError(null);
      } catch (error) {
        setFetchError(error.message);
      } finally {
        setIsloading(false);
      }
    };
    (async () => await fetchItems())();*/
    /***************************************************/
  }, []);

  let handleCheck = async (id) => {
    let ListItems = items.map((item) =>
      item.id === id
        ? {
            ...item,
            checked: !item.checked,
          }
        : item
    );
    setItems(ListItems);
    // if local storage used need to update in Local storage
    localStorage.setItem("todo_list", JSON.stringify(ListItems));

    // fecthing from server or mock server
    /*
    let patchItem = ListItems.filter((item) => item.id === id);
    let updateOption = {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ checked: patchItem[0].checked }),
    };
    let reqURL = `${APIURL}/${id}`;
    let result = await requestApi(reqURL, updateOption);
    if (result) setFetchError(result);
    */
  };

  let handleDelete = async (id) => {
    let ListItems = items.filter((item) => item.id !== id);
    setItems(ListItems);
    // if local storage used need to update in Local storage
    localStorage.setItem("todo_list", JSON.stringify(ListItems));
    // fecthing from server or mock server
    /*
    let deleteOption = {
      method: "DELETE",
    };
    let reqURL = `${APIURL}/${id}`;
    let result = await requestApi(reqURL, deleteOption);
    if (result) setFetchError(result);*/
  };

  let addItem = async (item) => {
    let id = items.length ? items[items.length - 1].id + 1 : 1;
    let addNewItem = { id, checked: false, item };
    let listItems = [...items, addNewItem];
    setItems(listItems);
    // if local storage used need to update in Local storage
    localStorage.setItem("todo_list", JSON.stringify(listItems));
    // fecthing from server or mock server
    /*
    let postOption = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(addNewItem),
    };
    let result = await requestApi(APIURL, postOption);
    if (result) setFetchError(result);*/
  };
  let handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    setNewItem("");
  };

  return (
    <div className="App">
      <Header title="To-Do Lists" />
      <AddItems
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItems searchItem={searchItem} setSearchItem={setSearchItem} />
      <main>
        {/* {fetchError && <p>{fetchError}</p>} */}
        {/* {isLoading && <p>Loading..</p>} */}
        {/* {!isLoading && !fetchError && ( */}
        <Content
          items={items.filter((item) =>
            item.item.toLowerCase().includes(searchItem.trim().toLowerCase())
          )}
          setItems={setItems}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
        {/* )} */}
      </main>
      <Footer length={items.length} />
    </div>
  );
}
export default App;