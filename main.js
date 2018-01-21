const App = (function setupApp() {

  const publicAPI = {
    init: init
  }

  return publicAPI;

  // **************************

  function init() {
    UI.bindUIActions();
  }

}());

// **************************
// **************************

const UI = (function getUI() {

  const buttons = document.querySelectorAll('.btn');

  const publicAPI = {
    bindUIActions: bindUIActions
  };

  return publicAPI;

  // **************************

  function bindUIActions() {
    buttons.forEach(button => button.addEventListener('click', iterateAnimations));
    window.addEventListener('keypress', checkIfEnterKeyIsPressed);
  }

  function checkIfEnterKeyIsPressed(e) {
    if (isEnterKey(e)) {
      iterateAnimations();
    }
  }

  function isEnterKey(e) {
    return e.keyCode === 13;
  }

  function iterateAnimations() {
    const classAndAnimationPair = {
      firstAnimation: {
        className: 'search-container',
        animationName: 'search-container-slide-up'
      },
      secondAnimation: {
        className: 'search-header',
        animationName: 'shorten-header-font-size'
      },
      thirdAnimation: {
        className: 'search-input-el',
        animationName: 'enlarge-search-font-size'
      },
      fourthAnimation: {
        className: 'search-button-area',
        animationName: 'fade-buttons'
      },
      fifthAnimation: {
        className: 'results-container',
        animationName: 'results-container-slide-up'
      }
    }

    for (let key in classAndAnimationPair) {
      let animation = classAndAnimationPair[key];
      renderAnimation(animation.className, animation.animationName);
    }
  }

  function renderAnimation(className, animationName) { // TODO => name
    const classEl = document.querySelector(`.${className}`);
    classEl.classList.add(`${animationName}`);
  }

}());

// **************************
// **************************

App.init();
