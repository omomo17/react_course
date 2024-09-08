const App = () => {
  return (
    <>
      
    </>
  );
}

function Accordion({ children }) {
  return (
    <div className="border border-gray-300 rounded-lg">
      {children}
    </div>
  );
}

function AccordionItem({ num, title, text }) {
  return (
    <div>
      <p>{num}</p>
      <p>{text}</p>
      <p>-</p>
    </div>
  );
}