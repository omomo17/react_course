import PropTypes from 'prop-types';

const Stats = ({ items }) => {
    if (items.length === 0) {
        return <footer><em>No items in the list. Start adding some items to your packing list.</em></footer>
    }


    //These variables are recalculated automatically when the contents of items change.
    //Therefore, the number of "re-renders" will not increase due to these calculations.
    const numItems = items.length;
    const numPackedItems = items.filter((item) => item.packed).length;
    const packedItemRate = Math.round(numPackedItems / numItems * 100);

    return (
        <footer>
            <em>{packedItemRate === 100 ? `You got everything! Ready to go.` : `You have ${numItems} items on your list, and you already packed ${numPackedItems} items. Progress is ${packedItemRate} %`}</em>
        </footer>
    )


};

Stats.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        quantity: PropTypes.number.isRequired,
        description: PropTypes.string.isRequired,
        packed: PropTypes.bool.isRequired,
    })).isRequired
};

export default Stats;