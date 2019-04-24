import React, {useState, useEffect} from 'react'
const Pagination = ({currentPage, totalPages, maxPages, onChangePage}) => {
  const [pages, setPages] = useState(null)

  useEffect(() => {
    // setPages(renderPages())
    const {startPage, endPage} = generateData()
    setPages(generatePages(startPage, endPage))
  }, [currentPage, totalPages, maxPages])

  const generateData = () => {
    // depends on maxPages currentPage totalPages
    // calc maxPagesBeforeCurrent maxPagesAfterCurrent startPage endPage
    // returns startPage endPage
    const maxPagesBeforeCurrent = Math.floor(maxPages / 2)
    const maxPagesAfterCurrent = Math.ceil(maxPages / 2) - 1
    let startPage
    let endPage

    console.log({currentPage, totalPages, maxPages, maxPagesAfterCurrent, maxPagesBeforeCurrent})
    if (totalPages < maxPages) {
      startPage = 1
      endPage = totalPages
    } else if (currentPage - maxPagesBeforeCurrent > 1 && currentPage + maxPagesAfterCurrent < totalPages) {
      startPage = currentPage - maxPagesBeforeCurrent
      endPage = currentPage + maxPagesAfterCurrent
    } else if (currentPage - maxPagesBeforeCurrent <= 1) {
      startPage = 1
      endPage = maxPages
    } else if (currentPage + maxPagesAfterCurrent >= totalPages) {
      startPage = totalPages - maxPages + 1
      endPage = totalPages
    }

    return {startPage, endPage}
  }

  const generatePages = (startPage, endPage) => {
    const pages = []
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