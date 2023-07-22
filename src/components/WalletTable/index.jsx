import React, { useContext } from 'react';
import './WalletTable.css';
import pencil from '../../assets/pencil_icon.png';
import trash from '../../assets/trash_icon.png';
import UsersContext from '../../context/UsersContext';

function WalletTable() {

  const { usersData } = useContext(UsersContext);
  console.log(usersData[1]);
  return (
    <div className='walletTableContainer'>
      <div className='walletTableContent'>
        <div className='walletHeader'>
          <h3>Carteiras</h3>
          <button><h4>Exportar CSV</h4></button>
        </div>
        <table border="1">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Sobrenome</th>
              <th>Email</th>
              <th>Bitcoin</th>
            </tr>
          </thead>
          <tbody>
            {usersData.map((user, index) => (
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
        <div className="tableFooter">
          <div className="recordCount">30 registro(s)</div>
          <div className="paginationNumbers">
            <button><span>1</span></button>
            <button><span>2</span></button>
            <button><span>3</span></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WalletTable;
