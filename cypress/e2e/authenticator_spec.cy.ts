describe("Authenticator:", function () {
  beforeEach(function () {
    cy.visit("/");
  });
  describe("Text Check", () => {
    it("My First Test", () => {
      cy.get(test.btn).click();
    });
  });
});

export const test = {
  btn: `[data-variation="primary"]`,
};
