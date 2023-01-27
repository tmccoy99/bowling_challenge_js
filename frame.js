class Frame {
  constructor(firstBall, secondBall = null, thirdBall = null) {
    this.firstBall = firstBall;
    this.secondBall = secondBall;
    this.thirdBall = thirdBall;
    this.#checkSelfValid();
  }

  strike() {
    return this.firstBall === 10;
  }

  #checkSelfValid() {
    this.#checkNotEmpty();
    this.#checkStrikeIfSingleBall();
    this.#checkAllBallsValid();
  }

  #checkNotEmpty() {
    if (!this.firstBall) {
      throw new Error("A frame must have at least one ball!");
    }
  }

  #checkStrikeIfSingleBall() {
    if (!this.strike() && !this.secondBall) {
      throw new Error("A frame with only one ball must be a strike!");
    }
  }

  #checkAllBallsValid() {
    const balls = [this.firstBall, this.secondBall, this.thirdBall];
    if (!balls.every(this.#validBall)) {
      throw new Error(
        "Entries to the frame constructor must be integers between 1 and 10!"
      );
    }
  }
  #validBall(ball) {
    return (
      ball === null || (typeof ball === "number" && ball >= 0 && ball <= 10)
    );
  }
}

module.exports = Frame;
