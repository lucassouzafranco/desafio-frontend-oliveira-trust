import React, { useState } from 'react';
import next from '../../assets/next_icon.png';
import previous from '../../assets/previous_icon.png';
import './Pagination.css';

const Pagination = ({ currentPageNumber, setCurrentPageNumber, numberOfUsers }) => {
  const totalPages = Math.ceil(numberOfUsers / 10); // 10 users per page
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  function handlePreviousButton() {
    if (currentPageNumber === 1) {
      return;
    } else {
      setCurrentPageNumber(currentPageNumber - 1);
    }
  }

  function handleNextButton() {
    if (currentPageNumber + 1 <= totalPages) {
      setCurrentPageNumber(currentPageNumber + 1);
    } else {
      return;
    }
  }

  return (
    <div className="tableFooter">
      <div className="recordCount">{numberOfUsers} registro(s)</div>
      <div className="paginationTools">
        <img src={previous} className='arrow' alt="Previous" onClick={handlePreviousButton} />
        {pages.map((page) => (
          <button key={page} onClick={() => setCurrentPageNumber(page)}>
            <span className={`paginationNumbers ${currentPageNumber === page ? 'active' : ''}`}>{page}</span>
          </button>
        ))}
        <img src={next} className='arrow' alt="Next" onClick={handleNextButton} />
      </div>
    </div>
  );
}

export default Pagination;
