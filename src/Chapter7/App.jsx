import FAQs from './FAQs';
import Accordion from './Accordion';

const App = () => {
    return (
        <div className="p-4">
            <Accordion data={FAQs} />
        </div>
    );
}

export default App;