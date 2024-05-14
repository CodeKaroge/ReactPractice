import './App.css';
import DynamicComponent from './DynamicComponent';

function App() {
  const fields = [
    { name: 'email', type: 'text', label: "Email" },
    { name: 'comment', type: 'textarea', label: "Comment" },
    { name: 'age', type: 'number', label: 'Age' }
  ]

  return (
    <div className="App">
      <DynamicComponent fields={fields} />
    </div>
  );
}

export default App;
