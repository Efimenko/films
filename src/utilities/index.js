export const range = (start, end) => {
  const arr = [];
  for (let i = start; i <= end; i++) {
    arr.push(i);
  }
  return arr;
};

export const parseQuery = query => {
  return query
    ? query
        .slice(1)
        .split("&")
        .map(pairString => pairString.split("="))
        .reduce((acc, [key, value]) => {
          return { ...acc, [key]: value };
        }, {})
    : {};
};
