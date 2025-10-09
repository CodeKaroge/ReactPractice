import Accordion from "./components/Accordion";
import "./App.css";

const App = () => {
  const accordionData = [
    {
      title: "What is React?",
      content: "React is a JavaScript library for building user interfaces."
    },
    {
      title: "What is a Hook?",
      content: "Hooks let you use state and other React features without writing a class."
    },
    {
      title: "What is Virtual DOM?",
      content: "The virtual DOM is a lightweight JavaScript representation of the real DOM."
    }
  ];

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Accordion Component Demo</h2>
      <Accordion items={accordionData} />
    </div>
  );
};

export default App;
