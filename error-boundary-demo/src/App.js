import './App.css';
import ErrorBoundary from './components/ErrorBoundary';
import UserList from './components/UserList';

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <UserList />
      </ErrorBoundary>
    </div>
  );
}

export default App;
 