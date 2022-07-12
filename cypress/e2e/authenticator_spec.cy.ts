describe("Authenticator:", function () {
  beforeEach(function () {
    cy.visit("/", { timeout: 30000 });
  });
  describe("Text Check", () => {
    it("My First Test", () => {
      cy.get(test.username).type("testAccount");
      cy.get(test.password).type("ot1928d1");
      cy.get(test.btn).click();
    });
  });
});

export const test = {
  username: `[placeholder="Username"]`,
  password: `[placeholder="Password"]`,
  btn: `[data-variation="primary"]`,
};
