import './App.css';

import { useState } from 'react';

import reactLogo from './assets/react.svg';
import { Modal } from './Modal/Modal';

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(true);

  return (
    <>
      <div className="dd" onClick={() => setModalIsOpen(true)}></div>
      <Modal isVisible={modalIsOpen} onBackdropClick={() => setModalIsOpen(false)}>
        <div className="check">
          <div>
            <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
              <img src="/vite.svg" className="logo" alt="Vite logo" />
            </a>
            <a href="https://reactjs.org" target="_blank" rel="noreferrer">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
          </div>
          <h1>Vite + React</h1>
          <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
        </div>
      </Modal>
    </>
  );
}

export default App;
