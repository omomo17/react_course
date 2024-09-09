import PropTypes from 'prop-types';
import icon1 from "./assets/icon1.png";
import icon2 from "./assets/icon2.png";
import icon3 from "./assets/icon3.png";

const initialFriends = [
    { id: 1, name: "John", imgPath: icon1, balance: 100 },
    { id: 2, name: "Jane", imgPath: icon2, balance: -100 },
    { id: 3, name: "Joe", imgPath: icon3, balance: 0 },
];

function FriendsList() {
    const friends = initialFriends;

    return (
        <ul className="space-y-4">
            {friends.map((friend) => (
                <Friend friend={friend} key={friend.id} />
            ))}
        </ul>
    );
}

function Friend({ friend }) {
    return (
        <li className="flex items-center p-4 bg-white shadow-md rounded-lg">
            <img src={friend.imgPath} alt={friend.name} className="w-12 h-12 rounded-full mr-4" />
            <div className="flex-1">
                <h3 className="text-lg font-semibold">{friend.name}</h3>
                {friend.balance < 0 && <p className="text-red-500">You owe {friend.name} ${Math.abs(friend.balance)}</p>}
                {friend.balance > 0 && <p className="text-green-500">{friend.name} owes you ${Math.abs(friend.balance)}</p>}
                {friend.balance === 0 && <p className="text-gray-500">You and {friend.name} are even</p>}
            </div>
            <button className="ml-auto bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                Select
            </button>
        </li>
    );
}

Friend.propTypes = {
    friend: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        imgPath: PropTypes.string.isRequired,
        balance: PropTypes.number.isRequired,
    }).isRequired,
};

export default FriendsList;
