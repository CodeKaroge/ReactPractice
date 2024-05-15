import './App.css';
import Modal from './Modal';
import { useState } from 'react';

function App() {
  const [isOpen, setIsOpen] = useState(false)
  const handleOpenModal = () => {
    setIsOpen(true)
  }

  const handleCloseModal = () => {
    setIsOpen(false)
  }

  return (
    <div className="App">
      <button onClick={handleOpenModal}>Open Modal</button>
      <Modal isOpen={isOpen} handleCloseModal={handleCloseModal} >
        <div>This is data for child</div>
        <p>lorem30
        </p>
        <input type='text' />
        <br />
        <button onClick={handleCloseModal}>Close Modal</button>
      </Modal>
    </div>
  );
}

export default App;
