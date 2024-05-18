import './App.css';
import CKEditorComponent from './Components/Editor/CKEditorComponent';
import ExcelApp from './Components/Editor/ExcelApp';
import ExcelProperty from './Components/Editor/ExcelProperty';
import Table from './Components/Tables/Table';
import Form from './Components/formFolde/Form';
import CounterDown from './Components/Counter/Countdown';
import StarRating from './Components/StartRating/StarRating';
import TaskList from './Components/TaskList/TaskList';
import { useState } from 'react';

export default function App() {
  return (
    <div className="App">
      <TaskList />
    </div>
  );
}









{/* <DynamicForm fields={fields} /> */ }
{/* <ExcelProperty /> */ }
{/* <TodoList /> */ }
{/* <StarRating numberOfStars={5} /> */ }
{/* <StarRating numberOfStars={5} /> */ }
// export default App;
{/* <StarRating totalStars={10} >  </StarRating> */ }
{/* <Table /> */ }
{/* <Form /> */ }