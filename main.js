const App = (function setupApp() {

  const publicAPI = {
    init: init
  }

  return publicAPI;

  // **************************

  function init() {
    UI.addAnimation();
  }

}());

// **************************
// **************************

const UI = (function getUI() {

  const buttons = document.querySelectorAll('.btn');

  const publicAPI = {
    addAnimation: addAnimation
  };

  return publicAPI;

  // **************************

  function addAnimation() {
    buttons.forEach(button => button.addEventListener('click', iterateAnimations));
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
