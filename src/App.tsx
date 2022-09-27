import './App.css';

import { useState } from 'react';

import { Modal } from './Modal';

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(true);

  return (
    <>
      <div className="dd" onClick={() => setModalIsOpen(true)}></div>
      <Modal isVisible={modalIsOpen} onBackdropClick={() => setModalIsOpen(false)}>
        <div className="check">Modal</div>
      </Modal>
    </>
  );
}

export default App;
