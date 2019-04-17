import React, {useState, useEffect} from 'react'
const Pagination = ({currentPage, totalPagesm, onChangePage}) => {
  const [pages, setPages] = useState(null)

  useEffect(() => {
    setPages(renderPages())
  }, [currentPage])

  const renderPages = () => {
    const pages = []
    for (let i = currentPage; i < currentPage + 5; i++) {
      pages.push(<li><a href={`#page${i}`} onClick={onChangePage(i)}>{i}</a></li>)
    }

    return pages
  }
  return (
    pages && (<ul>{pages}</ul>)
  )
}

export default Pagination