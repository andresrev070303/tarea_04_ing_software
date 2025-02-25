import conversor from "./convertir.js";

describe("Sumar", () => {
  it("deberia devolver I si se ingresa 1", () => {
    expect(conversor(1)).toEqual("I");
  });
  it("debería convertir 2 a II", () => {
    expect(conversor(2)).toEqual("II");
  });
  it("debería convertir 3 a III", () => {
  expect(conversor(3)).toEqual("III");
  });
  it("debería convertir 4 a IV", () => {
    expect(conversor(4)).toEqual("IV");
  });
  it("debería convertir 5 a V", () => {
    expect(conversor(5)).toEqual("V");
  });
  it("debería convertir 9 a IX", () => {
    expect(conversor(9)).toEqual("IX");
  });
  it("debería convertir 10 a X", () => {
    expect(conversor(10)).toEqual("X");
  });
  it("debería convertir 14 a XIV", () => {
    expect(conversor(14)).toEqual("XIV");
  });
  it("debería convertir 40 a XL", () => {
    expect(conversor(40)).toEqual("XL");
  });
  it("debería convertir 50 a L", () => {
    expect(conversor(50)).toEqual("L");
  });
  it("debería convertir 90 a XC", () => {
    expect(conversor(90)).toEqual("XC");
  });
  it("debería convertir 100 a C", () => {
    expect(conversor(100)).toEqual("C");
  });
  it("debería convertir 400 a CD", () => {
    expect(conversor(400)).toEqual("CD");
  });



  
});


