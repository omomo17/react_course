import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";

const App = () => {
  const [items, setItems] = useState([]);

  function handleAddItem(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    console.log(id);
    setItems((items) => items.filter((item) => item.id !== id));
}

  return (
    <div>
      <Logo />
      <Form onAddItem={handleAddItem}/>
      <PackingList items={items} onDeleteItem={handleDeleteItem}/>
      <Stats />
    </div>
  );
};

const Stats = () => {
  return <h3>form</h3>;
};

export default App;
