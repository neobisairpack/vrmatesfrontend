import React from 'react';
import './style/pagination.css'

const Pagination = ({postsPerPage, totalPosts, paginate, currentPage}) => {
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <nav>
            <ul className={"pagination"}>
                {pageNumbers.map((number) => (
                    <li key={number}>
                        <a onClick={() => paginate(number)}
                           className={"pagination__link " + (currentPage === number ? "pagination__active" : "")}>{number}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Pagination;