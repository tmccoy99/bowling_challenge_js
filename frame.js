class Frame {
  constructor(firstBall, secondBall = null, thirdBall = null) {
    this.firstBall = firstBall;
    this.secondBall = secondBall;
    this.thirdBall = thirdBall;
    this.next = null;
    this.#checkSelfValid();
  }

  setNext(frame) {
    this.next = frame;
  }

  getNext() {
    return this.next;
  }

  getFirstBall() {
    return this.firstBall;
  }

  getSecondBall() {
    return this.secondBall;
  }

  getThirdBall() {
    return this.thirdBall;
  }

  strike() {
    return this.firstBall === 10;
  }

  spare() {
    return !this.strike() && this.firstBall + this.secondBall === 10;
  }

  #checkSelfValid() {
    this.#checkNotEmpty();
    this.#checkStrikeIfSingleBall();
    this.#checkAllBallsValid();
    this.#checkScoreValid();
  }

  #checkNotEmpty() {
    if (!this.firstBall && !(this.firstBall === 0)) {
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
    function validBall(ball) {
      return (
        ball === null || (typeof ball === "number" && ball >= 0 && ball <= 10)
      );
    }
    if (!balls.every(validBall)) {
      throw new Error(
        "Arguments of the Frame constructor must be integers between 0 and 10!"
      );
    }
  }

  #checkScoreValid() {
    const validScore = this.thirdBall
      ? this.#validThreeBallScore()
      : this.#validNormalScore();
    if (!validScore) {
      throw new Error("The score of a frame must be valid!");
    }
  }

  #validNormalScore() {
    return this.firstBall + this.secondBall <= 10;
  }

  #validThreeBallScore() {
    return this.strike() || this.spare();
  }
}

module.exports = Frame;
