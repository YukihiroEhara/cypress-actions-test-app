describe("My First Test", () => {
  it("init test", () => {
    cy.visit("http://localhost:3000/");
    cy.contains("GitHub");
  });
  it("add test", () => {
    cy.wait(15000);
    cy.contains("commitTest");
  });
});
