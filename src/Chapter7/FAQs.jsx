const FAQs = [
    {
        title: "Q1. What is React?",
        text: "React is a front-end JavaScript library developed by Facebook in 2011. It follows the component-based approach for building interactive and reusable UI components. It is used for developing complex and interactive web and mobile UI."
    },
    {
        title: "Q2. What are the features of React?",
        text: "The top features of React are:\n\nJSX\nComponents\nOne-way Data Binding\nVirtual DOM\nSimplicity\nPerformance\n"
    },
    {
        title: "Q3. What is JSX?",
        text: "JSX stands for JavaScript XML. It allows us to write HTML in React. It is not a necessity to use JSX, but JSX makes it easier to write React Applications."
    },
    {
        title: "Q4. What is the difference between Element and Component?",
        text: "An Element is a plain object describing what you want to appear on the screen in terms of the DOM nodes or other components. Elements can contain other Elements in their props. Creating a React element is cheap. Once an element is created, it is never mutated.\n\nA component is a function or a class which optionally accepts input and returns a React element. Components can be reused and composed. Components often contain other components in their output. A component can manage a private state."
    },
    {
        title: "Q5. What is the difference between state and props?",
        text: "Both props and state are plain JavaScript objects. While both of them hold information that influences the output of render, they are different in their functionality with respect to component. Props get passed to the component similar to function parameters whereas state is managed within the component similar to variables declared within a function."
    },
    {
        title: "Q6. What are the different phases of React component’s lifecycle?",
        text: "The lifecycle of React components can be classified into three categories: initialization, state/property updates, and destruction. The initialization phase is the phase in which the component is going to start its journey. The component is going to start its journey. The component is going to set up the initial state and props. The update phase is the phase in which"
    },
]

export default FAQs;