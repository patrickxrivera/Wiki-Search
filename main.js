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
    bindUIActions: bindUIActions,
    renderArticles: renderArticles
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
      makeRequest();
    }
  }

  function isEnterKey(e) {
    return e.keyCode === 13;
  }

  function handleClickEvents() {
    addClickListenerTo('.btn', getRandomWikiArticle);
    addClickListenerTo('svg', makeRequest);
  }

  function addClickListenerTo(identifier, func) {
    const el = document.querySelector(identifier);
    el.addEventListener('click', func);
  }

  function getRandomWikiArticle() {
    const randomWikiArticleUrl = 'https://en.wikipedia.org/wiki/Special:Random';
    this.href = randomWikiArticleUrl;
  }

  function makeRequest() { // TODO better name
    getSearchVal();
    getAnimations();
  }

  function getSearchVal() {
    const searchVal = document.querySelector('.search-input-el').value;
    Query.getArticles(searchVal);
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

  function renderArticles(heading, paragraph, link) {
    const articlesEl = document.querySelector('.results-articles');
    const articleEntry = document.createElement('div');
    articleEntry.classList.add('results-entry');
    articleEntry.innerHTML = constructHTMLFor(heading, paragraph, link);
    articlesEl.appendChild(articleEntry);
  }

  function constructHTMLFor(heading, paragraph, link) {
    let articleHTML =
      `<a href=${link} target="_blank"> \
        <h4>${heading}</h4> \
        <p>${paragraph}</p> \
      </a>`
    return articleHTML;
  }

}());

// **************************
// **************************

const Query = (function getQuery() {

  const publicAPI = {
    getArticles: getArticles
  }

  return publicAPI;

  // **************************

  async function getArticles(searchVal) { // TODO name
    const wikiApiUrl = `https://en.wikipedia.org/w/api.php?action=opensearch&format=json&origin=*&search=${searchVal}`; // TODO consider changing name;
    const articlesArray = await getArticlesArray(wikiApiUrl);
    consolidate(articlesArray);
  }

  async function getArticlesArray(url) { // TODO better name
    try {
      let response = await fetch(url);
      let data = await response.json();
      return data;
    }
    catch(err) {
      console.warn('Error', err);
    }
  }

  function consolidate(articlesArray) { // TODO name and make function smaller
    const [headings, paragraphs, links] = [articlesArray[1], articlesArray[2], articlesArray[3]];

    for (let i = 0; i < headings.length; i++) {
      let heading = headings[i];
      let paragraph = paragraphs[i];
      let link = links[i];
      UI.renderArticles(heading, paragraph, link);
    }
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
