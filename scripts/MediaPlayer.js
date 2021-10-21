class MediaPlayer {
  constructor(configuration) {
    this.media = configuration.element;
    this.plugins = configuration.plugins || [];

    this.initializationPlugins();
  }
  initializationPlugins() {
    const player = {
      play: () => this.play(),
      pause: () => this.pause(),
      media: this.media,
      get muted() {
        return this.media.muted;
      },
      set muted(mute) {
        this.media.muted = mute;
      }
    };
    this.plugins.forEach((plugin) => {
      plugin.run(player);
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
