import BasePage from "./basePage";

class PractiseFormPage extends BasePage {
  static get url() {
    return "/automation-practice-form";
  }
  static get firstName(){
    return cy.get('#firstName');
  }
  static get lastName(){
    return cy.get('#lastName');
  }
  static get email(){
    return cy.get('#userEmail');
  }
//Gender checkboxes------------------------------
  static get maleCheck(){
    return cy.get('[id = "gender-radio-1"]');
  }
  static get femaleCheck(){
    return cy.get('[id = "gender-radio-2"]');
  }
  static get otherCheck(){
    return cy.get('[id = "gender-radio-3"]');
  }
//-----------------------------------------------
  static get mobile(){
    return cy.get('#userNumber');
  }
//Calendar---------------------------------------  
  static get datoOfBrithInput(){
    return cy.get('#dateOfBirthInput');
  }
  static setYear(myYear){
    cy.get('[class = "react-datepicker__year-select"]').select(myYear);
  }
  static setMonth(myMonth){
    return cy.get('[class = "react-datepicker__month-select"]').select(myMonth);
  }
  static setDate(myDate){
    return cy.get('[class*="react-datepicker__day"]').not("[class*='react-datepicker__day--outside-month']").contains(myDate).click();;
  }
//-----------------------------------------------
  static get subjects(){
    return cy.get('.subjects-auto-complete__value-container');
  }
//Hobbies checkboxes-----------------------------
  static get sportsHobbies(){
    return cy.get('[id = "hobbies-checkbox-1"]');
  }
  static get readingHobbies(){
    return cy.get('[id = "hobbies-checkbox-2"]');
  }
  static get musicHobbies(){
    return cy.get('[id = "hobbies-checkbox-3"]');
  }
//-----------------------------------------------
  static get currentAddress(){
    return cy.get('#currentAddress');
  }
  static get state(){
    return cy.get('#stateCity-wrapper > :nth-child(2)');
  }
  static get city(){
    return cy.get('#stateCity-wrapper > :nth-child(3)');
  }
  static get submitButton(){
    return cy.get('#submit');
  }
}

export default PractiseFormPage;