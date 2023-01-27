const Frame = require("./frame");

const regularFrame = new Frame(5, 2);
const strikeFrame = new Frame(10);
const spareFrame = new Frame(1, 9);
const finalFrame = new Frame(10, 5, 10);

describe("Constructor raises appropriate error for invalid arguments", () => {
  it("Frames cannot have no balls", () => {
    expect(() => {
      new Frame();
    }).toThrow(new Error("A frame must have at least one ball!"));
  });

  it("Frames cannot have only one ball if they are not strikes", () => {
    expect(() => {
      new Frame(9);
    }).toThrow(new Error("A frame with only one ball must be a strike!"));
  });

  it("Frames cannot have invalid data passed in", () => {
    expect(() => {
      new Frame(11, 5);
    }).toThrow(
      new Error(
        "Arguments of the Frame constructor must be integers between 1 and 10!"
      )
    );
    expect(() => {
      new Frame(5, -1);
    }).toThrow(
      new Error(
        "Arguments of the Frame constructor must be integers between 1 and 10!"
      )
    );
    expect(() => {
      new Frame(5, 5, "hi");
    }).toThrow(
      new Error(
        "Arguments of the Frame constructor must be integers between 1 and 10!"
      )
    );
  });

  it("rejects invalid Frame scores", () => {
    expect(() => {
      new Frame(2, 9);
    }).toThrow(new Error("The score of a frame must be valid!"));
    expect(() => {
      new Frame(10, 1);
    }).toThrow(new Error("The score of a frame must be valid!"));
    expect(() => {
      new Frame(1, 8, 5);
    }).toThrow(new Error("The score of a frame must be valid!"));
  });
});

it("strike() returns boolean of whether frame is a strike", () => {
  expect(strikeFrame.strike()).toBe(true);
  expect(finalFrame.strike()).toBe(true);
  expect(regularFrame.strike()).toBe(false);
  expect(spareFrame.strike()).toBe(false);
});
