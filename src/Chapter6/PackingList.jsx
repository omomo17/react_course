import PropTypes from 'prop-types';
import { useState } from 'react';
import { RxCrossCircled } from "react-icons/rx";

const PackingList = ({ items, onDeleteItem, onToggleItem, onClearList }) => {
  const [sortBy, setSortBy] = useState("input");
  let sortedItems;

  if (sortBy === "input") {
    sortedItems = items;
  }
  if (sortBy === "description") {
    sortedItems = items.slice().sort((a, b) => a.description.localeCompare(b.description));
  }
  if (sortBy === "packed") {
    sortedItems = items.slice().sort((a, b) => a.packed - b.packed);
  }

    return (
      <div>
        <ul>
          {sortedItems.map((item) => (
            <Item item={item} onDeleteItem={onDeleteItem} onToggleItem={onToggleItem} key={item.id}/>
          ))}
        </ul>

        <div>
          <select value={sortBy} onChange={(e)=>setSortBy(e.target.value)}>
            <option value="input">Sort by input order</option>
            <option value="description">Sort by description</option>
            <option value="packed">Sort by packed status</option>
          </select>
          <button onClick={onClearList}>Clear List</button>
        </div>
      </div>
    );
  };
  
PackingList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    packed: PropTypes.bool.isRequired,
  })).isRequired,
    onDeleteItem: PropTypes.func.isRequired,
    onToggleItem: PropTypes.func.isRequired,
    onClearList: PropTypes.func.isRequired,
};

const Item = ({ item, onDeleteItem, onToggleItem }) => {
    return (
      <li>
        <input type="checkbox" value={item.packed} onChange={()=>onToggleItem(item.id)}/>
        <span style={item.packed ? { textDecoration: "line-through" } : {}}>
          {item.quantity} {item.description}
        </span>
        <button onClick={() => onDeleteItem(item.id)}>
          <RxCrossCircled className="text-xl text-red-600" />
        </button>
      </li>
    );
  };

Item.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    packed: PropTypes.bool.isRequired,
  }).isRequired,
  onDeleteItem: PropTypes.func.isRequired,
  onToggleItem: PropTypes.func.isRequired,
};

export default PackingList;