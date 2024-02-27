// Agrupador
describe("Pruebas <DemoComponent/>>", () => {
    // test
  test("nameTest", () => {

    //Arrange
    const message1 = "hola mundo";

    // Act
    const message2 = message1.trim();

    // Assert comportamiento esperado
    expect(message1).toBe(message2);
  });
});
