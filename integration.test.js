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

it("Scorecard can calculate correct score with ten frames added", () => {
  scorecard = fullScorecard();
  expect(scorecard.calculate()).toBe(133);
});
