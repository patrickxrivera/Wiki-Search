const UI = (function getUI() {
  const articlesContainer = document.querySelector('.results-articles');

  const publicAPI = {
    bindUIActions,
    renderArticles
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
    clearContainer();
    getSearchVal();
    getAnimations();
  }

  function clearContainer() {
    articlesContainer.classList.add('animated', 'fadeOut');
    articlesContainer.innerHTML = '';
  }

  function getSearchVal() {
    const searchVal = document.querySelector('.search-input-el').value;
    Data.getArticlesFrom(searchVal);
  }

  function getAnimations() {
    const animations = getScreenSpecificAnimations();
    iterateThrough(animations);
  }

  function getScreenSpecificAnimations() {
    const desktopAnimations = Helpers.desktopAnimations;
    const mobileAnimations = Helpers.mobileAnimations;

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

  function renderArticles(article) {
    const articleEntry = createArticleEntryEl(article);
    runContainerAnimation();
    articlesContainer.appendChild(articleEntry);
  }

  function createArticleEntryEl(article) {
    const articleEntry = document.createElement('div');
    articleEntry.classList.add('results-entry');
    articleEntry.innerHTML = constructHTMLFor(article);
    return articleEntry;
  }

  function constructHTMLFor({heading, paragraph, link} = {}) { // destructure article obj parameter or return empty obj if no obj is passed in
    let articleHTML =
      `<a href=${link} target="_blank"> \
        <h4>${heading}</h4> \
        <p>${paragraph}</p> \
      </a>`
    return articleHTML;
  }

  function runContainerAnimation() {
    articlesContainer.classList.remove('fadeOut');
    articlesContainer.classList.add('fadeIn');
  }

}());

// **************************
// **************************

const Data = (function setupData() {

  const publicAPI = {
    getArticlesFrom
  }

  return publicAPI;

  // **************************

  async function getArticlesFrom(searchVal) {
    const wikiApiUrl = `https://en.wikipedia.org/w/api.php?action=opensearch&format=json&origin=*&search=${searchVal}`;
    const articlesArray = await getArticlesArray(wikiApiUrl);
    consolidate(articlesArray);
  }

  async function getArticlesArray(url) {
    try {
      let response = await fetch(url);
      let data = await response.json();
      return data;
    }
    catch(err) {
      console.warn('Error', err);
    }
  }

  function consolidate(articlesArray) {
    const [ , headings, paragraphs, links] = [...articlesArray];

    headings.forEach((item, index) => {
      const article = {
        heading: headings[index],
        paragraph: paragraphs[index],
        link: links[index]
      }
      UI.renderArticles(article);
    });
  }

}());

// **************************
// **************************

const Helpers = {
  desktopAnimations: {
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
  },
  mobileAnimations: {
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
  }
}

// **************************
// **************************

UI.bindUIActions();
