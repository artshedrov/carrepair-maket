class VideoTab {
  constructor(props) {
    
    let defaultConfig = {
      videoTabAttribute: '.tab__video',
      videoLinkAttribute: '.video__link',
      tabMediaAttribute: '.video__img',
      playButtonAttribute: '.play-button'
    }

    this.config = Object.assign(defaultConfig, props);
    this.initFindVideoTab();
  }

  initFindVideoTab() {
    let videos = document.querySelectorAll(this.config.videoTabAttribute);
    for (let i = 0; i < videos.length; i++) {
      this.setupVideoTab(videos[i]);
    }
  }

  setupVideoTab(video) {
    let link = video.querySelector(this.config.videoLinkAttribute);
    let button = video.querySelector(this.config.playButtonAttribute);

    video.addEventListener('click', () => {
      let media = video.querySelector(this.config.tabMediaAttribute);
      let id = this.parseMediaURLTab(media);
      let iframe = this.createIframeTab(id);
      link.remove();
      button.remove();
      video.appendChild(iframe);
    });
    link.removeAttribute('href');
    video.classList.add('video--enabled');
  }

  parseMediaURLTab(media) {
    let regexp = /https:\/\/i\.ytimg\.com\/vi\/([a-zA-Z0-9_-]+)\/hqdefault\.jpg/i;
    let url = media.src;
    let match = url.match(regexp);
    console.log(match);
    return match[1];
  }

  createIframeTab(id) {
    let iframe = document.createElement('iframe');
  
    iframe.setAttribute('allowfullscreen', '');
    iframe.setAttribute('allow', 'autoplay');
    iframe.setAttribute('src', this.generateURLTab(id));
    iframe.classList.add('video__img');
  
    return iframe;
  }

  generateURLTab(id) {
    let query = '?rel=0&showinfo=0&autoplay=1';
    return 'https://www.youtube.com/embed/' + id + query;
  }
}