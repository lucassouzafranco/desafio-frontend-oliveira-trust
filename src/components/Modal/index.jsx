import React from 'react';
import './Modal.css';

const Modal = ({ isOpen, onClose, onSubmit, children, errorMessage }) => {
  if (!isOpen) return null;

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        {children}
        {errorMessage && <p className="error">{errorMessage}</p>}
        <div className="buttonContainer">
          <button className="cancelButton" onClick={onClose}>Cancelar</button>
          <button className="submitButton" onClick={handleSubmit}>Adicionar</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
