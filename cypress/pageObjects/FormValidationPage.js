import BasePage from "./basePage";

class FormValidationPage extends BasePage {
  static get nameCell() {
    return cy.get('tbody > :nth-child(1) > :nth-child(2)');
  }
  static get emailCell() {
    return cy.get('tbody > :nth-child(2) > :nth-child(2)');
  }
  static get genderCell() {
    return cy.get('tbody > :nth-child(3) > :nth-child(2)');
  }
  static get mobileCell() {
    return cy.get('tbody > :nth-child(4) > :nth-child(2)');
  }
  static get dateOfBirthCell() {
    return cy.get('tbody > :nth-child(5) > :nth-child(2)');
  }
  static get subjectsCell() {
    return cy.get('tbody > :nth-child(6) > :nth-child(2)');
  }
  static get hobbyCell() {
    return cy.get('tbody > :nth-child(7) > :nth-child(2)');
  }
  static get addressCell() {
    return cy.get('tbody > :nth-child(9) > :nth-child(2)');
  }
  static get stateCityCell() {
    return cy.get('tbody > :nth-child(10) > :nth-child(2)');
  }

}

export default FormValidationPage;