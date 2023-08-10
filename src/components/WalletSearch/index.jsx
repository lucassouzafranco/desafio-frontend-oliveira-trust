import React, { useEffect, useState } from 'react';
import './WalletSearch.css';
import search from '../../assets/search_icon.png';
import Modal from '../Modal';
import axios from 'axios';
import { toast } from 'react-toastify';
import WalletTable from '../WalletTable';
import BTC from '../../assets/bitcoin_icon.png'

function WalletSearch({ data }) {
  const [showModal, setShowModal] = useState(false);
  const [real, setReal] = useState(null);
  const [purchaseAmount, setPurchaseAmount] = useState(0);
  const [bitcoins, setBitcoins] = useState(0);
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [walletData, setWalletData] = useState([]);
  const [typedWords, setTypedWords] = useState('');
  const [searchedUser, setSearchedUser] = useState(null);
  const [hasSearchResults, setHasSearchResults] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState(null);
  const [moreThanOneBTC, setMoreThanOneBTC] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const resetSearchBarFields = () => {
    setName('');
    setLastName('');
    setEmail('');
    setErrorMessage('');
  };

  const closeModal = () => {
    setShowModal(false);
    resetSearchBarFields();
  };

  const updateWalletData = (newWallet) => {
    setWalletData((prevData) => [...prevData, newWallet]);
  };

  useEffect(() => {
    const fetchWalletData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/users');
        setWalletData(response.data); // Update walletData state with API response
      } catch (error) {
        console.log('Error fetching wallet data:', error);
      }
    };

    fetchWalletData();
  }, []);


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
    setTypedWords(name);
  };

  const handleLastNameChange = (event) => {
    const lastName = removeSpecialCharacters(event.target.value);
    setLastName(lastName);
    setTypedWords(lastName);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setTypedWords(event.target.value);
  };

  const handleFilterButtonClick = () => {
    setMoreThanOneBTC((prevStatus) => !prevStatus);

    // Apply the filter when the button is clicked
    const filteredUsers = walletData.filter((user) => {
      if (moreThanOneBTC) {
        return user.valor_carteira >= 1;
      }
      return true;
    });

    setFilteredUsers(filteredUsers);
    setHasSearchResults(true);

    if (moreThanOneBTC) {
      toast.success('Mostrando apenas carteiras com 1 Bitcoin ou mais');
    } else {
      toast.success('Mostrando todas as carteiras');
    }

    // Also, update the search results if the filter is active
    if (typedWords) {
      handleSearchButton();
    }
  };


  const meetsFilterCondition = (user) => {
    if (moreThanOneBTC) {
      return user.valor_carteira >= 1;
    }
    return true;
  };


  const handleSearchButton = () => {
    const typedWord = typedWords.trim().toLowerCase(); // Remove leading/trailing spaces and convert to lowercase

    if (!typedWord) {
      setHasSearchResults(false);
      setSearchedUser(null);
      setFilteredUsers(walletData); // Reset to display all users if the search input is empty
      return;
    }

    const filteredUsers = walletData.filter((user) => {
      const { nome, sobrenome, email } = user;
      const lowerCasedNome = nome.toLowerCase();
      const lowerCasedSobrenome = sobrenome.toLowerCase();
      const lowerCasedEmail = email.toLowerCase();


      return (
        lowerCasedNome.includes(typedWord) ||
        lowerCasedSobrenome.includes(typedWord) ||
        lowerCasedEmail.includes(typedWord)
      );
    });

    setHasSearchResults(true);
    setSearchedUser(filteredUsers[0]); // If there are multiple matching users, use the first one
    setFilteredUsers(filteredUsers);
    console.log('Search Results:', filteredUsers);
  };

  const handleSubmit = () => {
    if (!name || !lastName || !email || !purchaseAmount) {
      toast.error('Por favor, preencha todos os campos');
      return;
    }

    // Add additional email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error('Insira um endereço de email válido.');
      return;
    }

    // If all validations pass, close the modal and reset the error message
    closeModal();
    const newWalletData = {
      nome: name,
      sobrenome: lastName,
      email: email,
      valor_carteira: parseFloat(purchaseAmount),
    };

    axios.post('http://localhost:3000/users', newWalletData)
      .then((response) => {
        if (response.data.error === 'Email already registered') {
          toast.error('Este email já está registrado. Por favor, use outro email.');
        } else {
          toast.success('Carteira adicionada com sucesso!');
          updateWalletData(response.data);
        }
      })
      .catch((error) => {
        toast.error('Erro ao adicionar a carteira', error);
      });

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
            <button type="button" className='searchButton' onClick={handleSearchButton}>
              <img src={search} alt="Search" />
              <h4>Buscar</h4>
            </button>
            <div className='filterButtonContainer' title="Mostra carteiras acima de 1 BTC">
              <img
                src={BTC}
                alt="Bitcoin Filter"
                title="Filtrar carteiras de 1 Bitcoin ou mais"
                className={moreThanOneBTC ? 'filterIcon active' : 'filterIcon'}
                onClick={handleFilterButtonClick}
              />
            </div>
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
            <h4>{`BTC ${bitcoins}`}</h4>
          </div>
        </form>
      </Modal>
      <WalletTable
        data={hasSearchResults ? filteredUsers : walletData}
        real={real}
      />
    </div>
  );
}

export default WalletSearch;