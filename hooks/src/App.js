import './App.css';
import { CounterProvider } from './components/UseContext/index';
import Counter from './components/UseContext/Counter';
import UseRefComponent from './components/UseRef/UseRefComponent';
import useLocalStorage from './components/UseLocalStorage/useLocalStorage';
import UseLocalStorageComonent from './components/UseLocalStorage/UseLocalStorageComonent';
import UseFetchComponent from './components/UseFetch/UseFetchComponent';
import UseDebounceComponent from './components/UseDebounce/UseDebounceComponent';
import UseToggleComponent from './components/UseToggle/UseToggleComponent';

function App() {
  return (
    <div className="App">
      <h1>Code Karoge</h1>
      <UseToggleComponent />
    </div>
  );
}

export default App;
