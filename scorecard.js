class Scorecard {
  constructor() {
    this.frameCount = 0;
  }

  add(...frames) {
    for (const frame of frames) {
      if (this.frameCount === 10) {
        throw new Error("Only 10 frames can be added to one scorecard!");
      }
      this.#updateLinkedListStructure(frame);
      this.frameCount += 1;
    }
  }

  calculate() {}

  #updateLinkedListStructure(frame) {
    if (this.frameCount === 0) {
      this.firstFrame = frame;
      this.lastFrame = frame;
    } else {
      this.lastFrame.next = frame;
      this.lastFrame = frame;
    }
  }
}

module.exports = Scorecard;
