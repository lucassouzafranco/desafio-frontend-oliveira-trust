import React from 'react'
import next from '../../assets/next_icon.png';
import previous from '../../assets/previous_icon.png';
import './Pagination.css';

function Pagination() {
  return (
    <div className="tableFooter">
      <div className="recordCount">10 registro(s)</div>
      <div className="paginationTools">
        <img src={previous} className='arrow'/>
          <button><span className='paginationNumbers'>1</span></button>
          <button><span className='paginationNumbers'>2</span></button>
          <button><span className='paginationNumbers'>3</span></button>
        <img src={next} className='arrow'/>
      </div>
    </div>
  )
}

export default Pagination;