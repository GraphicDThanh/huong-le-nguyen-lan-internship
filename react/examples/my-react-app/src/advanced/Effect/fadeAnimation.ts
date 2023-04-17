class FadeInAnimation {
  private node: HTMLElement;

  private duration = 0;

  private startTime: number | null = null;

  private frameId: number | null = null;

  constructor(node: HTMLElement) {
    this.node = node;
  }

  public start(duration: number): void {
    this.duration = duration;
    this.onProgress(0);
    this.startTime = performance.now();
    this.frameId = requestAnimationFrame(() => this.onFrame());
  }

  private onFrame(): void {
    const timePassed = performance.now() - this.startTime!;
    const progress = Math.min(timePassed / this.duration, 1);
    this.onProgress(progress);
    if (progress === 1) {
      this.stop();
    } else {
      // We still have more frames to paint
      this.frameId = requestAnimationFrame(() => this.onFrame());
    }
  }

  private onProgress(progress: number): void {
    this.node.style.opacity = progress.toString();
  }

  public stop(): void {
    cancelAnimationFrame(this.frameId!);
    this.startTime = null;
    this.frameId = null;
    this.duration = 0;
  }
}

export default FadeInAnimation;
