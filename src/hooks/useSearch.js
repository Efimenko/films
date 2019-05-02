import { useEffect, useState } from "react";
import { parseQuery, generateQuery } from "../utilities";

const usePagination = ({ location, history }) => {
  console.log("from pag", { location });
  const defaultPage = Number(parseQuery(location.search).page) || 1;

  console.log("from pag", { defaultPage });
  const [currentPage, setCurrentPage] = useState(defaultPage);
  console.log("after useState", { currentPage });
  useEffect(() => {
    const currentSearch = parseQuery(location.search);
    console.log({ currentSearch });
    const updatedSearchString = generateQuery({
      ...currentSearch,
      page: currentPage
    });
    history.push({
      search: updatedSearchString
    });
  }, [currentPage]);

  console.log("from pag", { currentPage });
  return [currentPage, setCurrentPage];
};

export default usePagination;
