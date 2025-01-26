import './App.css';
import { CounterProvider } from './components/UseContext/index';
import Counter from './components/UseContext/Counter';
import UseRefComponent from './components/UseRef/UseRefComponent';
import useLocalStorage from './components/UseLocalStorage/useLocalStorage';
import UseLocalStorageComonent from './components/UseLocalStorage/UseLocalStorageComonent';
import UseFetchComponent from './components/UseFetch/UseFetchComponent';
import UseDebounceComponent from './components/UseDebounce/UseDebounceComponent';
import UseToggleComponent from './components/UseToggle/UseToggleComponent';
import UsePreviousComponent from './components/UsePrevious/UsePreviousComponent';
import UseEventListenerComponent from './components/UseEventListener/UseEventListenerComponent';
import UseCopyToClipboardComponent from './components/UseCopyToClipboard/UseCopyToClipboardComponent';
import UseHoverComponent from './components/UseHover/UseHoverComponent';
import UseTimeOutComponent from './components/UseTimeout/UseTimeoutComponent';

function App() {
  return (
    <div className="App">
      <h1>Code Karoge</h1>
      <UseTimeOutComponent
      />
    </div>
  );
}

export default App;
