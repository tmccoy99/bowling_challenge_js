const Scorecard = require("./scorecard");
const Frame = require("./frame");

function fullScorecard() {
  let scorecard = new Scorecard();
  return scorecard.add(
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

it("Scorecard can calculate correct score with ten frames added", () => {
  scorecard = fullScorecard();
  expect(scorecard.calculate()).toBe(133);
});
