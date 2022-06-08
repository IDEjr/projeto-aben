const getDateIsoString = e => e.date || e.fileName.substring(e.fileName.indexOf("-") + 1, e.fileName.indexOf("_"));

const sortCallback = (a, b) => {
  const dateA = getDateIsoString(a);
  const dateB = getDateIsoString(b);

  return new Date(dateB) - new Date(dateA);
}

export {
  getDateIsoString,
  sortCallback
}
  