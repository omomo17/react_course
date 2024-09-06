import PropTypes from 'prop-types';
import { RxCrossCircled } from "react-icons/rx";

const PackingList = ({ items, onDeleteItem }) => {
    return (
      <div>
        <ul>
          {items.map((item) => (
            <Item item={item} onDeleteItem={onDeleteItem} key={item.id}/>
          ))}
        </ul>
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
};

const Item = ({ item, onDeleteItem }) => {
    return (
      <li>
        <span style={item.packed ? { textDecoration: "line-through" } : {}}>
          {item.quantity} {item.description}
        </span>
        <button onClick={() => onDeleteItem(item.id)}>
          <RxCrossCircled className="text-xl text-red-600" />
        </button>
        {/* <input type="checkbox" checked={item.packed} /> */}
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
};

export default PackingList;