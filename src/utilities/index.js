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

export const generateQuery = data => {
  return data
    ? Object.keys(data).reduce((acc, key, index) => {
        if (index === 0) {
          acc += `?${key}=${data[key]}`;
        } else {
          acc += `&${key}=${data[key]}`;
        }

        return acc;
      }, "")
    : "";
};
