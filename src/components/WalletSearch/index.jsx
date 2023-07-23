import React, { useEffect, useState } from 'react';
import './WalletSearch.css';
import search from '../../assets/search_icon.png';
import Modal from '../Modal';
import axios from 'axios';
import { toast } from 'react-toastify';

function WalletSearch() {
  const [showModal, setShowModal] = useState(false);
  const [real, setReal] = useState(null);
  const [purchaseAmount, setPurchaseAmount] = useState(0);
  const [bitcoins, setBitcoins] = useState(0);
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const bitcoinToReal = async () => {
    try {
      const response = await axios.get('http://economia.awesomeapi.com.br/json/last/BTC-BRL');
      setReal(response.data.BTCBRL.high);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    bitcoinToReal();
  }, []);

  useEffect(() => {
    setBitcoins((purchaseAmount / real).toFixed(8));
  }, [purchaseAmount, real]);

  const handlePurchaseAmountChange = (event) => {
    setPurchaseAmount(event.target.value);
  };

  const removeSpecialCharacters = (input) => {
    return input.replace(/[^a-zA-ZÀ-ÖØ-öø-ÿ\s]/g, '');
  };

  const handleNameChange = (event) => {
    const name = removeSpecialCharacters(event.target.value);
    setName(name);
  };

  const handleLastNameChange = (event) => {
    const lastName = removeSpecialCharacters(event.target.value);
    setLastName(lastName);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = () => {
    // Perform form validation here
    if (!name || !lastName || !email || !purchaseAmount) {
      toast.error('Por favor, preencha todos os campos');
      return;
    }

    // Add additional email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error('Por favor, insira um endereço de email válido.');
      return;
    }

    // If all validations pass, close the modal and reset the error message
    closeModal();
    toast.success('Carteira adicionada com sucesso!');

    console.log('Form data submitted:');
    console.log('Name:', name);
    console.log('Last Name:', lastName);
    console.log('Email:', email);
    console.log('Purchase Amount:', purchaseAmount);
  };

  return (
    <div className='walletSearchContainer'>
      <div className='walletSearchContent'>
        <div className='titleAndButton'>
          <div className='title'>
            <h2>BTC Carteiras</h2>
          </div>
          <div className='addWalletContainer'>
            <button onClick={openModal}>Adicionar Carteira</button>
          </div>
        </div>

        <div className='searchBar'>
          <form className='searchBarContent'>
            <label className='nameField'>
              <h5>Nome:</h5>
              <input type="text" name="name" value={name} onChange={handleNameChange} />
            </label>
            <label className='lastNameField'>
              <h5>Sobrenome:</h5>
              <input type="text" name="lastname" value={lastName} onChange={handleLastNameChange} />
            </label>
            <label className='emailField'>
              <h5>Email:</h5>
              <input type="text" name="email" value={email} onChange={handleEmailChange} />
            </label>
            <button className='searchButton'>
              <img src={search} alt="Search" />
              <h4>Buscar</h4>
            </button>
          </form>
        </div>
      </div>
      <Modal isOpen={showModal} onClose={closeModal} onSubmit={handleSubmit} errorMessage={errorMessage}>
        <h2 className='modalTitle'>Adicionar Carteira</h2>
        <form className='modalContent'>
          <label className='walletName'>
            <h5>Nome</h5>
            <input type="text" name="name" value={name} onChange={handleNameChange} />
          </label>
          <label className='walletLastName'>
            <h5>Sobrenome</h5>
            <input type="text" name="lastname" value={lastName} onChange={handleLastNameChange} />
          </label>
          <label className='walletEmail'>
            <h5>Email</h5>
            <input type="text" name="email" value={email} onChange={handleEmailChange} />
          </label>
          <label className='purchasePrice'>
            <h5>Valor de compra (BRL)</h5>
            <input type="number" name="value" value={purchaseAmount} onChange={handlePurchaseAmountChange} />
          </label>
          <div className='bitcoinValue'>
            <h3>{`BTC ${bitcoins}`}</h3>
          </div>
        </form>
      </Modal>
    </div>
  );
}

export default WalletSearch;
