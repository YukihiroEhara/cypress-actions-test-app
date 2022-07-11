describe("Authenticator:", function () {
  beforeEach(function () {
    cy.visit("/");
  });
  describe("Text Check", () => {
    it("My First Test", () => {
      cy.get(selectors.topTitle).contains("GitHub Actions Test!!!!");
    });
  });
});
export const selectors = {
  topTitle: '[data-cy="top-title"]',
  root: "#root",
};
