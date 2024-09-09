import FAQs from './FAQs';
// import Accordion from './Accordion';
import Accordion from './Accordion_v2';

const App = () => {
    return (
        <div className="p-4">
            <Accordion data={FAQs} />
        </div>
    );
}

export default App;