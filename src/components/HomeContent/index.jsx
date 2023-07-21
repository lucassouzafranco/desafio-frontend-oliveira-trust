import React from 'react'
import WalletSearch from '../WalletSearch';
import './HomeContent.css';
import WalletTable from '../WalletTable';

function HomeContent() {
  return (
    <div className='backgroundColor'>
      <WalletSearch />
      <WalletTable />
    </div>
  )
}

export default HomeContent;