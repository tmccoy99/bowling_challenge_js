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

  calculateTotalScore() {
    if (this.frameCount != 10) {
      throw new Error("10 frames must be added before calculation!");
    }
    let currentFrame = this.firstFrame;
    let score = 0;
    while (currentFrame) {
      score += this.#calculateFrameScore(currentFrame);
      currentFrame = currentFrame.next;
    }
    return score;
  }

  #calculateFrameScore(frame) {
    let score = frame.getFirstBall() + frame.getSecondBall();
    if (frame.getThirdBall()) {
      return score + frame.getThirdBall();
    } else if (frame.spare()) {
      return score + this.#spareBonus(frame);
    } else if (frame.strike()) {
      return score + this.#strikeBonus(frame);
    } else {
      return score;
    }
  }

  #spareBonus(frame) {
    return frame.next.getFirstBall();
  }

  #strikeBonus(frame) {
    let bonus = frame.next.getFirstBall();
    bonus += frame.next.getSecondBall()
      ? frame.next.getSecondBall()
      : frame.next.next.getFirstBall();
    return bonus;
  }

  #updateLinkedListStructure(frame) {
    if (this.frameCount === 0) {
      this.firstFrame = frame;
    } else {
      this.lastFrame.next = frame;
    }
    this.lastFrame = frame;
  }
}

module.exports = Scorecard;
