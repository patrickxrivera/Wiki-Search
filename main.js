const App = (function setupApp() {

  const publicAPI = {
    init: init
  };

  return publicAPI;

  // **************************

  function init() {
    UI.bindUIActions();
  };

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
    handleKeyPress();
    handleClickEvents();
  }

  function handleKeyPress() {
    window.addEventListener('keypress', checkIfEnterKeyIsPressed);
  }

  function checkIfEnterKeyIsPressed(e) {
    if (isEnterKey(e)) {
      getAnimations();
    }
  }

  function isEnterKey(e) {
    return e.keyCode === 13;
  }

  function handleClickEvents() {
    addClickListenerTo('.btn', getRandomWikiArticle);
    addClickListenerTo('svg', getAnimations);
  }

  function addClickListenerTo(identifier, func) {
    const el = document.querySelector(identifier);
    el.addEventListener('click', func);
  }

  function getRandomWikiArticle() {
    const randomWikiArticleUrl = 'https://en.wikipedia.org/wiki/Special:Random';
    this.href = randomWikiArticleUrl;
  }

  function getAnimations() {
    const animations = getScreenSpecificAnimations();
    iterateThrough(animations);
  }

  function getScreenSpecificAnimations() {
    const desktopAnimations = Data.getDesktopAnimations();
    const mobileAnimations = Data.getMobileAnimations();

    return isDesktop() ? desktopAnimations : mobileAnimations;
  }

  function isDesktop() {
    return window.innerWidth >= 769;
  }

  function iterateThrough(animations) {
    for (let key in animations) {
      extract(key, animations);
    }
  }

  function extract(key, animations) {
    let animation = animations[key];
    renderAnimation(animation.className, animation.animationName);
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
    getMobileAnimations: getMobileAnimations
  }

  return publicAPI;

  // **************************

  function getDesktopAnimations() {
    const desktopAnimations = {
      one: {
        className: 'search-container',
        animationName: 'desktop-search-container-slide-up'
      },
      two: {
        className: 'search-header',
        animationName: 'desktop-move-header-diagonally'
      },
      three: {
        className: 'results-container',
        animationName: 'desktop-results-container-slide-up'
      },
      four: {
        className: 'search-header-el',
        animationName: 'desktop-decrease-header-font-size'
      },
      five: {
        className: 'search-button-area',
        animationName: 'fade-buttons'
      }
    };
    return desktopAnimations;
  }

  function getMobileAnimations() {
    const mobileAnimations = {
      one: {
        className: 'search-container',
        animationName: 'mobile-search-container-slide-up'
      },
      two: {
        className: 'search-header-el',
        animationName: 'mobile-decrease-header-font-size'
      },
      three: {
        className: 'results-container',
        animationName: 'mobile-results-container-slide-up'
      },
      four: {
        className: 'search-button-area',
        animationName: 'fade-buttons'
      }
    };
    return mobileAnimations;
  }

}());

// **************************
// **************************

App.init();
