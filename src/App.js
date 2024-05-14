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
import Modal from './Components/Modal';

export default function App() {
  return (
    <div className="App">
      <ExcelProperty />
    </div>
  );
}








{/* <h1>Modal Example</h1>
      <button onClick={openModal}>Open Modal</button>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2>This is a modal!</h2>
        <p>Here you can put any content you want.</p>
        <button onClick={closeModal}>Close Modal</button>
      </Modal> */}

{/* <DynamicForm fields={fields} /> */ }
{/* <ExcelProperty /> */ }
{/* <TodoList /> */ }
{/* <StarRating numberOfStars={5} /> */ }
{/* <StarRating numberOfStars={5} /> */ }
// export default App;
{/* <StarRating totalStars={10} >  </StarRating> */ }
{/* <Table /> */ }
{/* <Form /> */ }