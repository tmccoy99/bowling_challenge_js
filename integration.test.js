const Scorecard = require("./scorecard");
const Frame = require("./frame");

function fill(scorecard) {
  scorecard.add(
    new Frame(1, 4),
    new Frame(4, 5),
    new Frame(6, 4),
    new Frame(5, 5),
    new Frame(10),
    new Frame(0, 1),
    new Frame(7, 3),
    new Frame(6, 4),
    new Frame(10),
    new Frame(2, 8, 6)
  );
}

let scorecard;

beforeEach(() => {
  scorecard = new Scorecard();
});

it("Allows frames to be added", () => {
  scorecard.add(new Frame(1, 1));
});

it("Scorecard does not allow more than ten frames to be added", () => {
  fill(scorecard);
  expect(() => {
    scorecard.add(new Frame(5, 3));
  }).toThrow(new Error("Only 10 frames can be added to one scorecard!"));
});

it("Scorecard will throw error if calculate is called before 10 frames added", () => {
  expect(() => {
    scorecard.calculateTotalScore();
  }).toThrow(new Error("10 frames must be added before calculation!"));
});

it("Scorecard can calculate correct score in game with no strikes, spares or gutters", () => {
  for (let i = 1; i <= 10; i++) {
    scorecard.add(new Frame(2, 2));
  }
  expect(scorecard.calculateTotalScore()).toBe(40);
});

it("Scorecard can calculate correct score in game with strikes, spares and gutters", () => {
  fill(scorecard);
  expect(scorecard.calculateTotalScore()).toBe(133);
});

it("Scorecard can calculate games with sequential strikes", () => {
  for (let i = 1; i <= 9; i++) {
    scorecard.add(new Frame(10));
  }
  scorecard.add(new Frame(10, 10, 10));
  expect(scorecard.calculateTotalScore()).toBe(300);
});
