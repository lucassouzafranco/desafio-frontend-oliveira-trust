import React from 'react'
import './WalletSearch.css';

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
          <div className='searchBarContent'>
            <div className='nameField'><h5>Nome</h5></div>
            <div className='lastNameField'><h5>Sobrenome</h5></div>
            <div className='emailField'><h5>Email</h5></div>
            <div className='searchButton'><h4>Search</h4></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WalletSearch;
