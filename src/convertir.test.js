import conversor from "./convertir.js";

describe("Sumar", () => {
  it("deberia devolver I si se ingresa 1", () => {
    expect(conversor(1)).toEqual("I");
  });
  it("debería convertir 2 a II", () => {
    expect(conversor(2)).toEqual("II");
});
});


