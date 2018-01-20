export default (function getUtils() {

  const publicAPI = {
    getUpperCase: getUpperCase
  };

  return publicAPI;

  // **************************

  function getUpperCase(word) {
    return word.toUpperCase();
  }
}());
