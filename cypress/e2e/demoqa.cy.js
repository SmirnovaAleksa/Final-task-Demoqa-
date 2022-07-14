import PractiseFormPage from "../pageObjects/PractiseFormPage"
import InteractionsPage from "../pageObjects/InteractionsPage"
import FormValidationPage from "../pageObjects/FormValidationPage"

describe('Forms', () => {
  beforeEach(() => {
    PractiseFormPage.visit();
  });
  it('Practice forms', () => {
    //- Fill in information
    PractiseFormPage.firstName.type("Aleksandra");
    PractiseFormPage.lastName.type("Smirnova");
    PractiseFormPage.email.type("smirnovaaleksa39@gmail.com");
    PractiseFormPage.femaleCheck.click({force:true});
    PractiseFormPage.mobile.type("26777879");

    //- Date of birth
    //- Set value - 29/February/1984
    //- Pass the values dynamically, e.g. create methods:
    PractiseFormPage.datoOfBrithInput.click()
    //- setYear(“1984”)
    PractiseFormPage.setYear("1984");
    //- setMonth(“February”)
    PractiseFormPage.setMonth("February");
    //- “setDate(“29”)”
    PractiseFormPage.setDate("29");

    PractiseFormPage.subjects.type("Math{enter}");
    PractiseFormPage.musicHobbies.check({force:true});
    PractiseFormPage.readingHobbies.check({force:true});

    PractiseFormPage.currentAddress.type("Siguldas iela 35");
    PractiseFormPage.state.type("Haryana{enter}");
    PractiseFormPage.city.type("Panipat{enter}");
    //- Click Submit
    PractiseFormPage.submitButton.click();
    //- Validate Values in the table based on label value
    FormValidationPage.nameCell.should("have.text","Aleksandra Smirnova");
    FormValidationPage.emailCell.should("have.text","smirnovaaleksa39@gmail.com");
    FormValidationPage.genderCell.should("have.text","Female");
    FormValidationPage.mobileCell.should("have.text","26777879");
    FormValidationPage.dateOfBirthCell.should("have.text","29 February,1984");
    FormValidationPage.subjectsCell.should("have.text","Maths");
    FormValidationPage.hobbyCell.should("have.text","Music, Reading");
    FormValidationPage.addressCell.should("have.text","Siguldas iela 35");
    FormValidationPage.stateCityCell.should("have.text","Haryana Panipat");
  })
 
})
describe('Interactions', () => {
  beforeEach(() => {
    InteractionsPage.visit();
  });
  it('Sortable', () => {
    //- Validate that the values are in order - One, Two, Three, Four, Five, Six
    InteractionsPage.SortedTable.should("have.text","OneTwoThreeFourFiveSix");
    //- Sort the values in following order - Six, Five, Four, Three, Two, One
    InteractionsPage.SortedTable
    .trigger('mousedown', cy.get('.vertical-list-container > :nth-child(6)'))
    .trigger('mousemove', cy.get('.vertical-list-container > :nth-child(1)'))
    .trigger('mouseup');
    InteractionsPage.SortedTable
    .trigger('mousedown', cy.get('.vertical-list-container > :nth-child(6)'))
    .trigger('mousemove', cy.get('.vertical-list-container > :nth-child(2)'))
    .trigger('mouseup');
    InteractionsPage.SortedTable
    .trigger('mousedown', cy.get('.vertical-list-container > :nth-child(6)'))
    .trigger('mousemove', cy.get('.vertical-list-container > :nth-child(3)'))
    .trigger('mouseup');
    InteractionsPage.SortedTable
    .trigger('mousedown', cy.get('.vertical-list-container > :nth-child(6)'))
    .trigger('mousemove', cy.get('.vertical-list-container > :nth-child(4)'))
    .trigger('mouseup');
    InteractionsPage.SortedTable
    .trigger('mousedown', cy.get('.vertical-list-container > :nth-child(6)'))
    .trigger('mousemove', cy.get('.vertical-list-container > :nth-child(5)'))
    .trigger('mouseup');
    //- Validate that the values are in order - Six, Five, Four, Three, Two, One
    InteractionsPage.SortedTable.should("have.text","SixFiveFourThreeTwoOne");
  })
})