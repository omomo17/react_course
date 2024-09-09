import PropTypes from 'prop-types';
import { useState } from "react";
import FriendsList from './FriendsList';

const App = () => {
    const [showAddFriend, setShowAddFriend] = useState(false);

    function handleShowAddFriend() {
        setShowAddFriend((show) => !show);
    }

    return (
        <>
            <div>
                <FriendsList />
                {showAddFriend && <FormAddFriend />}
                <StyledButton onClick={handleShowAddFriend}>{showAddFriend ? "Close" : "Add friend"}</StyledButton>
            </div>
            <div>
                <FormSplitBill />
            </div>
        </>

    );
}

function StyledButton({ children, onClick}) {
    return (
        <button onClick={onClick} className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition-colors">{children}</button>
    );
}

StyledButton.propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired,
};

function FormAddFriend() {
    const [name, setName] = useState("");
    const [imgUrl, setImgUrl] = useState("");

    return (
        <form action="" className="bg-blue-50 p-6 rounded-lg shadow-md max-w-sm">
            <div className="flex items-center mb-4">
                <label className="text-blue-700 font-semibold">Friend name</label>
                <input
                    type="text" value = {name} onChange={e=>setName(e.target.value)}
                    className="ml-3 flex-1 p-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <div className="flex items-center mb-4">
                <label className="text-blue-700 font-semibold">Image URL</label>
                <input
                    type="text" value={imgUrl} onChange={e=>setImgUrl(e.target.value)}
                    className="ml-3 flex-1 p-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <div className="flex justify-end">
                <StyledButton>Add</StyledButton>
            </div>
        </form>
    );
}

function FormSplitBill() {
    return (
        <form action="" className="bg-blue-50 p-6 rounded-lg shadow-md max-w-sm">
            <h2>Split a bill with X</h2>
            <div className="flex items-center mb-4">
                <label className="text-blue-700 font-semibold">Bill value</label>
                <input
                    type="text"
                    className="ml-3 flex-1 p-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <div className="flex items-center mb-4">
                <label className="text-blue-700 font-semibold">Your expense</label>
                <input
                    type="text"
                    className="ml-3 flex-1 p-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <div className="flex items-center mb-4">
                <label className="text-blue-700 font-semibold">Xs expense</label>
                <input
                    type="text"
                    className="ml-3 flex-1 p-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <div className="flex items-center mb-4">
                <label className="text-blue-700 font-semibold">Who is paying the bill</label>
                <select>
                    <option value="user">You</option>
                    <option value="friend">X</option>
                </select>
            </div>
            <div className="flex justify-end">
                <StyledButton>Split bill</StyledButton>
            </div>
        </form>
    );
}

export default App;