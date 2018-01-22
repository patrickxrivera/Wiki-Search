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

  const publicAPI = {
    bindUIActions: bindUIActions
  };

  return publicAPI;

  // **************************

  function bindUIActions() {
    const randButton = document.querySelector('.btn');
    const searchIcon = document.querySelector('svg');
    getAnimationsOnClick(randButton);
    getAnimationsOnClick(searchIcon);
    window.addEventListener('keypress', checkIfEnterKeyIsPressed);
  }

  function getAnimationsOnClick(el) {
    el.addEventListener('click', getAnimations);
  }

  function checkIfEnterKeyIsPressed(e) {
    if (isEnterKey(e)) {
      getAnimations();
    }
  }

  function isEnterKey(e) {
    return e.keyCode === 13;
  }

  function getAnimations() {
    const classAndAnimationPairs = { // TODO better key names
      firstAnimation: {
        className: 'search-container',
        animationName: 'search-container-slide-up'
      },
      secondAnimation: {
        className: 'search-input-el',
        animationName: 'enlarge-search-font-size'
      },
      thirdAnimation: {
        className: 'search-button-area',
        animationName: 'fade-buttons'
      },
      fourthAnimation: {
        className: 'results-container',
        animationName: 'results-container-slide-up'
      }
    }

    addHeaderAnimation(classAndAnimationPairs);
    iterateThroughAnimations(classAndAnimationPairs)
  }

  function addHeaderAnimation(classAndAnimationPairs) {
    let animationName;

    if (isDesktop()) {
        animationName = 'move-header-diagonally';
    } else {
      animationName = 'decrease-header-font-size';
    }
    classAndAnimationPairs['fifthAnimation'] = {className: 'search-header-el', animationName: `${animationName}`};
  }

  function isDesktop() {
    return window.innerWidth >= 769;
  }

  function iterateThroughAnimations(classAndAnimationPairs) {
    for (let key in classAndAnimationPairs) {
      let animation = classAndAnimationPairs[key];
      renderAnimation(animation.className, animation.animationName);
    }
  }

  function renderAnimation(className, animationName) {
    const classEl = document.querySelector(`.${className}`);
    classEl.classList.add(`${animationName}`);
  }

}());

// **************************
// **************************

App.init();
