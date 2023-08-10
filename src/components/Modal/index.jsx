import React from 'react';
import './Modal.css';

const Modal = ({ isOpen, onClose, onSubmit, children, errorMessage, updateWalletData }) => {
  if (!isOpen) return null;

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await onSubmit();
      updateWalletData(); // Call the updateWalletData function after a successful submission
    } catch (error) {
      console.error(error);
    }
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