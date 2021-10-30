class MediaPlayer {
  public media: HTMLMediaElement;
  private plugins: Array<any>;
  public container: HTMLElement;
  constructor(configuration) {
    this.media = configuration.element;
    this.plugins = configuration.plugins || [];
    this.initializationPlugins();
    this.initializationPlayer();
  }
  initializationPlayer() {
    this.container = document.createElement('div');
    this.container.style.position = "relative";
    this.media.parentNode.insertBefore(this.container, this.media);
    this.container.appendChild(this.media);
  }
  private initializationPlugins() {
    this.plugins.forEach((plugin) => {
      plugin.run(this);
    });
  }
  play() {
    this.media.paused ? this.media.play() : this.media.pause();
  }
  pause() {
    this.media.pause();
  }
  togglePlay() {
    this.media.paused ? this.play() : this.pause();
  }
  mute() {
    this.media.muted = true;
  }
  unmute() {
    this.media.muted = false;
  }
  toggleMute() {
    this.media.muted ? this.unmute() : this.mute();
  }
}

export default MediaPlayer;
