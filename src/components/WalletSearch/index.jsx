import React from 'react'
import './WalletSearch.css';
import search from '../../assets/search_icon.png'

function WalletSearch() {
  return (
    <div className='walletSearchContainer'>
      <div className='walletSearchContent'>
        <div className='titleAndButton'>
          <div className='title'>
            <h2>BTC Carteiras</h2>
          </div>
          <div className='addWalletContainer'>
            <button>Adicionar Carteira</button>
          </div>
        </div>

        <div className='searchBar'>
        <form className='searchBarContent'>
          <label className='nameField'>
            <h5>Nome:</h5>
            <input type="text" name="name" />
          </label>
          <label className='lastNameField'>
            <h5>Sobrenome:</h5>
            <input type="text" name="name" />
          </label>
          <label className='emailField'>
            <h5>Email:</h5>
            <input type="text" name="name" />
          </label>
          <button className='searchButton'>
            <img src={search} alt="Search" />
            <h4>Buscar</h4>
          </button>
        </form>  
      </div>
        
      </div>
    </div>
  )
}

export default WalletSearch;
