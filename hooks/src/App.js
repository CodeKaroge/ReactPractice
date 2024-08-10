import './App.css';
import { CounterProvider } from './components/UseContext/index';
import Counter from './components/UseContext/Counter';
import UseRefComponent from './components/UseRef/UseRefComponent';

function App() {
  return (
    <div className="App">
      <CounterProvider>
        <UseRefComponent />
      </CounterProvider>
    </div>
  );
}

export default App;
