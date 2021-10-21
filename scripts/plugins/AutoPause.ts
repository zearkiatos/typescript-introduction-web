import MediaPlayer from "../MediaPlayer";
class AutoPause {
  private THRESHOLD: number = 0.25;
  private threshold: number;
  private player: MediaPlayer;
  constructor() {
    this.threshold = this.THRESHOLD;
    this.handlerIntersection = this.handlerIntersection.bind(this);
    this.handlerVisibilityChange = this.handlerVisibilityChange.bind(this);
  }
  run(player: MediaPlayer) {
    this.player = player;
    const configuration = {
      threshold: this.threshold,
    };
    const observer = new IntersectionObserver(
      this.handlerIntersection,
      configuration
    );

    observer.observe(this.player.media);

    document.addEventListener("visibilitychange", this.handlerVisibilityChange);
  }

  private handlerIntersection(entries: IntersectionObserverEntry[]) {
    const entry = entries[0];
    const visible = entry.intersectionRatio >= this.threshold;
    if (visible) {
      this.player.play();
    } else {
      this.player.pause();
    }
  }

  private handlerVisibilityChange() {
    const visible = document.visibilityState === "visible";

    if (visible) {
      this.player.play();
    } else {
      this.player.pause();
    }
  }
}

export default AutoPause;
