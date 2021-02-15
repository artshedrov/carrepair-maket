function findVideosTab() {
  let videos = document.querySelectorAll('.tab__video');
  for (let i = 0; i < videos.length; i++) {
    setupVideoTab(videos[i]);
  }
}

function setupVideoTab(video) {
  let link = video.querySelector('.video__link');
  let media = video.querySelector('.tab__media');
  //let media = link;
  let button = video.querySelector('.play-button');
  let id = parseMediaURLTab(media);
  //let title = video.querySelector('.video__header');

  video.addEventListener('click', () => {
      let iframe = createIframeTab(id);
      link.remove();
      button.remove();
      video.appendChild(iframe);
  });
  link.removeAttribute('href');
  video.classList.add('video--enabled');
}

function parseMediaURLTab(media) {
  let regexp = /https:\/\/i\.ytimg\.com\/vi\/([a-zA-Z0-9_-]+)\/hqdefault\.jpg/i;
  let url = media.src;
  let match = url.match(regexp);

  return match[1];
}

function createIframeTab(id) {
  let iframe = document.createElement('iframe');

  iframe.setAttribute('allowfullscreen', '');
  iframe.setAttribute('allow', 'autoplay');
  iframe.setAttribute('src', generateURLTab(id));
  iframe.classList.add('video__img');

  return iframe;
}

function generateURLTab(id) {
  let query = '?rel=0&showinfo=0&autoplay=1';

  return 'https://www.youtube.com/embed/' + id + query;
}

findVideosTab();