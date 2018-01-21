const App = (function setupApp() {

  const publicAPI = {
    init: init
  }

  return publicAPI;

  // **************************
  // **************************

  function init() {
    UI.addAnimation();
  }

}());


const UI = (function getUI() {

  const buttons = document.querySelectorAll('.btn');

  const publicAPI = {
    addAnimation: addAnimation
  };

  return publicAPI;

  // **************************

  function addAnimation() {
    const header = document.querySelector('.search-header h2');
    console.log(buttons);
    header.addEventListener('mouseover', renderSearchContainerSlideUp);
    buttons.forEach(button => button.addEventListener('mouseover', renderSearchContainerSlideUp));
  }

  function renderSearchContainerSlideUp() {
    console.log('hello');
  }

}());

// **************************
// **************************

App.init();
