import React from 'react';
import WalletSearch from '../WalletSearch';
import './HomeContent.css';
import WalletTable from '../WalletTable';
import Footer from '../Footer';

function HomeContent() {
  return (
    <div className='contentContainer'>
      <WalletSearch />
    </div>
  );
}

export default HomeContent;
