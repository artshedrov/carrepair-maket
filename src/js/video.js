class VideoBlock {
  constructor(props) {
    
    let defaultConfig = {
      videoBlock: '.video__block',
      videoLink: '.video__link',
      titleVideoBlock: '.video__header',
      playButton: '.video__button'
    }

    this.config = Object.assign(defaultConfig, props);
    this.initFindVideo();
  }

  initFindVideo() {
    let videos = document.querySelectorAll(this.config.videoBlock);
    for (let i = 0; i < videos.length; i++) {
      this.setupVideo(videos[i]);
    }
  }

  setupVideo(video) {
    let link = video.querySelector(this.config.videoLink);
    let button = video.querySelector(this.config.playButton);
    let title = video.querySelector(this.config.titleVideoBlock);
    video.addEventListener('click', () => {
      let link = video.querySelector(this.config.videoLink);
      // let media = video.querySelector(this.config.tabMediaAttribute);
      let media = link;
      let id = this.parseMediaURL(media);
      let iframe = this.createIframe(id);
      link.style.display = 'none';
      title.style.display = 'none';
      button.style.display = 'none';
      video.appendChild(iframe);
      link.removeAttribute('href');
      video.classList.add('video--enabled');
    });
  }

  parseMediaURL(media) {
    let regexp = /https:\/\/youtu\.be\/([a-zA-Z0-9_-]+)/i;
    let url = media.href;
    let match = url.match(regexp);
    return match[1];
  }

  createIframe(id) {
    let iframe = document.createElement('iframe');
  
    iframe.setAttribute('allowfullscreen', '');
    iframe.setAttribute('allow', 'autoplay');
    iframe.setAttribute('src', this.generateURL(id));
    iframe.classList.add('video__img');
  
    return iframe;
  }

  generateURL(id) {
    let query = '?rel=0&showinfo=0&autoplay=1';
    return 'https://www.youtube.com/embed/' + id + query;
  }
}