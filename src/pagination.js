import React, {useState, useEffect} from 'react'
const Pagination = ({currentPage, totalPages, maxPages, onChangePage}) => {
  const [pages, setPages] = useState(null)

  useEffect(() => {
    setPages(renderPages())
  }, [currentPage, totalPages])

  const renderPages = () => {
    const maxPagesBeforeCurrent = Math.floor(maxPages / 2)
    const maxPagesAfterCurrent = Math.ceil(maxPages / 2) - 1
    let startPage
    let endPage
    const pages = []

    console.log({currentPage, totalPages, maxPages, maxPagesAfterCurrent, maxPagesBeforeCurrent})
    if (totalPages < maxPages) {
      console.log(1)
      startPage = 1
      endPage = totalPages
    } else if (currentPage - maxPagesBeforeCurrent > 1 && currentPage + maxPagesAfterCurrent < totalPages) {
      console.log(2)
      startPage = currentPage - maxPagesBeforeCurrent
      endPage = currentPage + maxPagesAfterCurrent
    } else if (currentPage - maxPagesBeforeCurrent <= 1) {
      console.log(3)
      startPage = 1
      // endPage = currentPage + maxPagesAfterCurrent
      endPage = maxPages
    } else if (currentPage + maxPagesAfterCurrent >= totalPages) {
      console.log(4)
      // startPage = currentPage - maxPagesBeforeCurrent
      startPage = totalPages - maxPages + 1
      endPage = totalPages
    }
    for (let i = startPage; i <= endPage; i++) {
      pages.push(<li className={i === currentPage ? 'current' : ''}><a href={`#page${i}`} onClick={onChangePage(i)}>{i}</a></li>)
    }

    return pages
  }
  return (
    pages && (<ul>{pages}</ul>)
  )
}

export default Pagination