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
    const animations = getScreenSpecificAnimations();
    iterateThrough(animations);
  }

  function getScreenSpecificAnimations() {
    const mobileAnimations = {
      mobileAnimationOne: {
        className: 'search-container',
        animationName: 'mobile-search-container-slide-up'
      },
      mobileAnimationTwo: {
        className: 'search-header',
        animationName: 'mobile-header-diagonally'
      },
      mobileAnimationThree: {
        className: 'results-container',
        animationName: 'mobile-results-container-slide-up'
      }
    }

    const desktopAnimations = {
      desktopAnimationOne: {
        className: 'search-container',
        animationName: 'desktop-search-container-slide-up'
      },
      desktopAnimationTwo: {
        className: 'search-header',
        animationName: 'move-header-diagonally'
      },
      desktopAnimationThree: {
        className: 'results-container',
        animationName: 'desktop-results-container-slide-up'
      }
    }

    let animations;

    if (isDesktop()) {
      animations = set(desktopAnimations);
    } else {
      animations = set(mobileAnimations);
    }
    
    return animations;
  }

  function isDesktop() {
    return window.innerWidth >= 769;
  }

  function set(deviceAnimations) { // TODO better variable name
    const sharedAnimations = { // TODO better key names, put in a better place
      one: {
        className: 'search-button-area',
        animationName: 'fade-buttons'
      }
    }

    for (let key in deviceAnimations) {
      sharedAnimations[key] = {
        className: deviceAnimations[key].className,
        animationName: deviceAnimations[key].animationName
      }
    }

    return sharedAnimations;
  }

  function iterateThrough(animations) {
    for (let key in animations) {
      let animation = animations[key];
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
