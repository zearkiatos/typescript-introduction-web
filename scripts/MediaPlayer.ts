class MediaPlayer {
  public media: HTMLMediaElement;
  private plugins: Array<any>;
  constructor(configuration) {
    this.media = configuration.element;
    this.plugins = configuration.plugins || [];

    this.initializationPlugins();
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
