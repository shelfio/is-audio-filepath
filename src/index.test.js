const isAudioFilepath = require("./index");

describe("isAudioFilepath", () => {
  it("should export isAudioFilepath function", () => {
    expect(isAudioFilepath).toBeInstanceOf(Function);
  });
});
