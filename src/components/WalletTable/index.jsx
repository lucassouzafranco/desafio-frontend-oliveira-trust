import React, { useContext, useState } from 'react';
import './WalletTable.css';
import pencil from '../../assets/pencil_icon.png';
import trash from '../../assets/trash_icon.png';
import UsersContext from '../../context/UsersContext';
import Pagination from '../Pagination';
import { CSVLink } from 'react-csv';
import CSVExportButton from '../CSVExportButton';

function WalletTable({ data, searchedUser }) {
  const { usersData } = useContext(UsersContext);
  const [usersPerPage, setUsersPerPage] = useState(10);
  const [currentPageNumber, setCurrentPageNumber] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const startIndex = (currentPageNumber - 1) * usersPerPage;
  const endIndex = startIndex + usersPerPage;
  const displayedUsers = data ? data.slice(startIndex, endIndex) : [];

  const csvHeaders = [
    { label: 'Nome', key: 'nome' },
    { label: 'Sobrenome', key: 'sobrenome' },
    { label: 'Email', key: 'email' },
    { label: 'Bitcoin', key: 'valor_carteira' },
  ];

  const csvData = data.map((user) => ({
    nome: user.nome,
    sobrenome: user.sobrenome,
    email: user.email,
    valor_carteira: user.valor_carteira,
  }));

  return (
    <div className={`walletTableContainer${isModalOpen ? ' modal-open' : ''}`}>
      <div className='walletTableContent'>
        <div className='walletHeader'>
          <h3>Carteiras</h3>
          <CSVExportButton
            data={csvData}
            headers={csvHeaders}
            filename={'wallet_data.csv'}
            buttonText={'Exportar CSV'}
            className='exportButton'
          />
        </div>
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Sobrenome</th>
              <th>Email</th>
              <th>Bitcoin</th>
            </tr>
          </thead>
          <tbody>
            {searchedUser ? ( // Check if searchedUser is not null
              <tr>
                <td>
                  <p>{searchedUser.nome}</p>
                </td>
                <td>
                  <p>{searchedUser.sobrenome}</p>
                </td>
                <td>
                  <p>{searchedUser.email}</p>
                </td>
                <td>
                  <div className='bitcoinContainer'>
                    <p>{searchedUser.valor_carteira}</p>
                    <div className='iconContainer'>
                      <img src={pencil} alt='Edit' />
                      <img src={trash} alt='Delete' />
                    </div>
                  </div>
                </td>
              </tr>
            ) : (
              displayedUsers.length > 0 ? (
                displayedUsers.map((user) => (
                  <tr key={user.id}>
                    <td>
                      <p>{user.nome}</p>
                    </td>
                    <td>
                      <p>{user.sobrenome}</p>
                    </td>
                    <td>
                      <p>{user.email}</p>
                    </td>
                    <td>
                      <div className='bitcoinContainer'>
                        <p>{user.valor_carteira}</p>
                        <div className='actionsContainer'>
                          <img src={pencil} alt='Edit' />
                          <img src={trash} alt='Delete' />
                        </div>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                // Render an empty table row if there are no users
                <tr>
                  <td colSpan='4'>No rows</td>
                </tr>
              )
            )}
          </tbody>
        </table>
        <hr />
        <Pagination
          currentPageNumber={currentPageNumber}
          setCurrentPageNumber={setCurrentPageNumber}
          numberOfUsers={usersData.length}
        />
      </div>
    </div>
  );
}

export default WalletTable;