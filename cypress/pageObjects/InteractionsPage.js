import BasePage from "./basePage";

class InteractionsPage extends BasePage {
  static get url() {
    return "/sortable";
  }
  static get SortedTable(){
    return cy.get("[class = 'vertical-list-container mt-4']");
  }
}

export default InteractionsPage;