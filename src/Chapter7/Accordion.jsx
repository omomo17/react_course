import PropTypes from 'prop-types';
import { useState } from 'react';

function Accordion({ data }) {
    return (
        <div className="border border-gray-300 rounded-lg divide-y divide-gray-200 shadow-lg">
            {data.map((item, index) => (
                <AccordionItem 
                    num={index} 
                    title={item.title} 
                    text={item.text} 
                    key={index} 
                />
            ))}
        </div>
    );
}

Accordion.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
    })).isRequired,
};

function AccordionItem({ num, title, text }) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div 
            className={`p-4 cursor-pointer ${isOpen ? 'bg-blue-50' : 'bg-white'} hover:bg-blue-100 transition-colors duration-200`} 
            onClick={() => setIsOpen(!isOpen)}
        >
            <div className="flex justify-between items-center">
                <div className="flex items-center space-x-4">
                    <p className="text-lg font-bold text-gray-700">
                        {num < 9 ? `0${num + 1}` : num + 1}
                    </p>
                    <p className="text-lg text-gray-800 font-semibold">
                        {title}
                    </p>
                </div>
                <p className="text-xl font-bold text-gray-700">
                    {isOpen ? "-" : "+"}
                </p>
            </div>
            {isOpen && (
                <div className="mt-2 text-gray-600 whitespace-pre-line">
                    {text}
                </div>
            )}
        </div>
    );
}

AccordionItem.propTypes = {
    num: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};

export default Accordion;