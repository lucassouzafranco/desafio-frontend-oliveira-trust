import React from 'react';
import './WalletTable.css';
import pencil from '../../assets/pencil_icon.png';
import trash from '../../assets/trash_icon.png';

function WalletTable() {
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
            <tr>
              <td><p>John</p></td>
              <td><p>Doe</p></td>
              <td><p>john.doe@example.com</p></td>
              <td>
                <div className="bitcoinContainer">
                  <p>0.0023</p>
                  <div className="iconContainer">
                    <img src={pencil} alt="Edit" />
                    <img src={trash} alt="Delete" />
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td><p>Jane</p></td>
              <td><p>Smith</p></td>
              <td><p>jane.smith@example.com</p></td>
              <td>
                <div className="bitcoinContainer">
                  <p>0.0078</p>
                  <div className="iconContainer">
                    <img src={pencil} alt="Edit" />
                    <img src={trash} alt="Delete" />
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td><p>John</p></td>
              <td><p>Doe</p></td>
              <td><p>john.doe@example.com</p></td>
              <td>
                <div className="bitcoinContainer">
                  <p>0.0023</p>
                  <div className="iconContainer">
                    <img src={pencil} alt="Edit" />
                    <img src={trash} alt="Delete" />
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td><p>Jane</p></td>
              <td><p>Smith</p></td>
              <td><p>jane.smith@example.com</p></td>
              <td>
                <div className="bitcoinContainer">
                  <p>0.0078</p>
                  <div className="iconContainer">
                    <img src={pencil} alt="Edit" />
                    <img src={trash} alt="Delete" />
                  </div>
                </div>
              </td>
            </tr>
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
