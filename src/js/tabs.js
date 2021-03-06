const tabs = document.querySelectorAll('[data-tab-target]');
const tabContents = document.querySelectorAll('[data-tab-content]');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget);
    tabContents.forEach(tabContent => {
      tabContent.classList.remove('tab--active');
    })
    tabs.forEach(tab => {
      tab.classList.remove('tab__btn--active');
    })
    tab.classList.add('tab__btn--active');
    target.classList.add('tab--active');
    stopAllYouTubeVideos();
  });
});

let stopAllYouTubeVideos = () => { 
  let iframes = document.querySelectorAll('iframe');
  Array.prototype.forEach.call(iframes, iframe => { 
    iframe.contentWindow.postMessage(JSON.stringify({ event: 'command', 
  func: 'pauseVideo' }), '*');
 });
}