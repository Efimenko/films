export default ({ currentPage, totalPages, maxPages = 7 } = {}) => {
  // depends on maxPages currentPage totalPages
  // calc maxPagesBeforeCurrent maxPagesAfterCurrent startPage endPage
  // returns startPage endPage
  const maxPagesBeforeCurrent = Math.floor(maxPages / 2);
  const maxPagesAfterCurrent = Math.ceil(maxPages / 2) - 1;
  let startPage;
  let endPage;

  if (totalPages < maxPages) {
    startPage = 1;
    endPage = totalPages;
  } else if (
    currentPage - maxPagesBeforeCurrent > 1 &&
    currentPage + maxPagesAfterCurrent < totalPages
  ) {
    startPage = currentPage - maxPagesBeforeCurrent;
    endPage = currentPage + maxPagesAfterCurrent;
  } else if (currentPage - maxPagesBeforeCurrent <= 1) {
    startPage = 1;
    endPage = maxPages;
  } else if (currentPage + maxPagesAfterCurrent >= totalPages) {
    startPage = totalPages - maxPages + 1;
    endPage = totalPages;
  }

  return { startPage, endPage };
};
