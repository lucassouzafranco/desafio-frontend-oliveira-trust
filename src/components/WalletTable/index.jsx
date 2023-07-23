import React, { useContext, useState } from 'react';
import './WalletTable.css';
import pencil from '../../assets/pencil_icon.png';
import trash from '../../assets/trash_icon.png';
import UsersContext from '../../context/UsersContext';
import Pagination from '../Pagination';

function WalletTable() {

  const { usersData } = useContext(UsersContext); 
  const [usersPerPage, setUsersPerPage] = useState(10);
  const [currentPageNumber, setCurrentPageNumber] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const startIndex = (currentPageNumber - 1) * usersPerPage;
  const endIndex = startIndex + usersPerPage;
  const displayedUsers = usersData.slice(startIndex, endIndex);

  return (
    <div className={`walletTableContainer${isModalOpen ? ' modal-open' : ''}`}>
      <div className='walletTableContent'>
        <div className='walletHeader'>
          <h3>Carteiras</h3>
          <button><h4>Exportar CSV</h4></button>
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
            {displayedUsers.map((user, index) => (
              <tr key={index}>
                <td><p>{user.nome}</p></td>
                <td><p>{user.sobrenome}</p></td>
                <td><p>{user.email}</p></td>
                <td>
                  <div className="bitcoinContainer">
                    <p>{user.valor_carteira}</p>
                    <div className="iconContainer">
                      <img src={pencil} alt="Edit" />
                      <img src={trash} alt="Delete" />
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <hr/>
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
