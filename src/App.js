import './App.css';
import CKEditorComponent from './Components/Editor/CKEditorComponent';
import ExcelApp from './Components/Editor/ExcelApp';
import ExcelProperty from './Components/Editor/ExcelProperty';
import Table from './Components/Tables/Table';
import Form from './Components/formFolde/Form';
import CounterDown from './Components/Counter/Countdown';
import StarRating from './Components/StartRating/StarRating';
import MouseEventsExample from './Components/MouseEventsExample';
import TodoList from './Components/Todo/TodoList';
import DebouncedInput from './Components/Debouncing/DebouncedInput';

export default function App() {
  return (
    <div className="App">
      <p>Hello coder 🐻</p>
      <TodoList />
    </div>
  );
}
{/* <StarRating numberOfStars={5} /> */ }
{/* <MouseEventsExample /> */ }
{/* <StarRating numberOfStars={5} /> */ }
// export default App;
{/* <StarRating totalStars={10} >  </StarRating> */ }
{/* <Table /> */ }
{/* <Form /> */ }