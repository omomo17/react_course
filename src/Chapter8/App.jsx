import PropTypes from 'prop-types';
import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Steps />
    </div>
  );
}

function Steps() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  const handlePrevious = () => {
    if (step > 1) {
      setStep((s) => s - 1);
    }
  };

  const handleNext = () => {
    if (step < 3) {
      setStep((s) => s + 1);
    }
  };

  const handleClose = () => {
    setIsOpen((is) => !is);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
      <button
        className="text-red-500 text-2xl font-bold self-end mb-4"
        onClick={handleClose}
      >
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="flex justify-between mb-6">
            <div
              className={`${
                step >= 1 ? "bg-purple-600 text-white" : "bg-gray-200"
              } w-8 h-8 flex items-center justify-center rounded-full`}
            >
              1
            </div>
            <div
              className={`${
                step >= 2 ? "bg-purple-600 text-white" : "bg-gray-200"
              } w-8 h-8 flex items-center justify-center rounded-full`}
            >
              2
            </div>
            <div
              className={`${
                step >= 3 ? "bg-purple-600 text-white" : "bg-gray-200"
              } w-8 h-8 flex items-center justify-center rounded-full`}
            >
              3
            </div>
          </div>
          <StepMessage step={step}>
            {messages[step - 1]}
            <div className="mt-4">
              <Button
                bgColor="#e7e7e7"
                textColor="#333"
                onClick={() => alert(`Learn how to ${messages[step - 1]}`)}
              >
                Learn how
              </Button>
            </div>
          </StepMessage>
          <div className="flex justify-between mt-6">
            <Button bgColor="#7950F2" textColor="#fff" onClick={handlePrevious}>
              <span role="img" aria-label="previous step">
                👈🏻
              </span>{" "}
              Previous
            </Button>
            <Button bgColor="#7950F2" textColor="#fff" onClick={handleNext}>
              Next{" "}
              <span role="img" aria-label="next step">
                👉🏻
              </span>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

Steps.propTypes = {};

function StepMessage({ step, children }) {
  return (
    <div className="text-center">
      <h3 className="text-xl font-semibold mb-2">Step {step}:</h3>
      <p className="text-gray-600">{children}</p>
    </div>
  );
}

StepMessage.propTypes = {
  step: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
};

function Button({ textColor, bgColor, onClick, children }) {
  return (
    <button
      className="py-2 px-4 rounded-lg font-medium transition-colors duration-200"
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  textColor: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};