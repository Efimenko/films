import { useEffect, useState } from "react";
import { parseQuery, generateQuery } from "../utilities";

const usePagination = ({ location, history }) => {
  const defaultPage = Number(parseQuery(location.search).page) || 1;
  const [currentPage, setCurrentPage] = useState(defaultPage);

  useEffect(() => {
    const currentSearch = parseQuery(location.search);
    const updatedSearchString = generateQuery({
      ...currentSearch,
      page: currentPage
    });
    history.push({
      search: updatedSearchString
    });
  }, [currentPage]);

  return [currentPage, setCurrentPage];
};

export default usePagination;
