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
    const desktopAnimations = Data.getDesktopAnimations();
    const mobileAnimations = Data.getMobileAnimations();

    return isDesktop() ? set(desktopAnimations) : set(mobileAnimations);
  }

  function isDesktop() {
    return window.innerWidth >= 769;
  }

  function set(deviceAnimations) { // TODO better variable name
    let sharedAnimations = Data.getSharedAnimations(); // TODO put this in a better place
    for (let key in deviceAnimations) { // TODO abstract out what's inside the for loop
      sharedAnimations[key] = {
        className: deviceAnimations[key].className,
        animationName: deviceAnimations[key].animationName
      }
    }

    return sharedAnimations;
  }

  function iterateThrough(animations) {
    for (let key in animations) { // TODO abstract out what's inside the for loop
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

const Data = (function getData() {

  const publicAPI = {
    getDesktopAnimations: getDesktopAnimations,
    getMobileAnimations: getMobileAnimations,
    getSharedAnimations: getSharedAnimations
  }

  return publicAPI;

  // **************************

  function getDesktopAnimations() {
    const desktopAnimations = {
      desktopAnimationOne: {
        className: 'search-container',
        animationName: 'desktop-search-container-slide-up'
      },
      desktopAnimationTwo: {
        className: 'search-header',
        animationName: 'desktop-move-header-diagonally'
      },
      desktopAnimationThree: {
        className: 'results-container',
        animationName: 'desktop-results-container-slide-up'
      },
      desktopAnimationFour: {
        className: 'search-header-el',
        animationName: 'desktop-decrease-header-font-size'
      }
    }
    return desktopAnimations;
  }

  function getMobileAnimations() {
    const mobileAnimations = {
      mobileAnimationOne: {
        className: 'search-container',
        animationName: 'mobile-search-container-slide-up'
      },
      mobileAnimationTwo: {
        className: 'search-header-el',
        animationName: 'mobile-decrease-header-font-size'
      },
      mobileAnimationThree: {
        className: 'results-container',
        animationName: 'mobile-results-container-slide-up'
      }
    }
    return mobileAnimations;
  }

  function getSharedAnimations() {
    const sharedAnimations = { // TODO better key names, put in a better place
      sharedAnimationOne: {
        className: 'search-button-area',
        animationName: 'fade-buttons'
      }
    }
    return sharedAnimations;
  }

}());

// **************************
// **************************

App.init();
