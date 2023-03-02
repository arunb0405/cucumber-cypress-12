class ProductPage {
  elements = {
    backPackAddCart: () => cy.xpath("//div[text()='Sauce Labs Backpack']/ancestor::div[@class='inventory_item_label']/following-sibling::div//button"),
    cartButton: () => cy.get('a.shopping_cart_link'),
    checkoutButton: () => cy.get('button[data-test="checkout"]'),
    checkoutTitle: () => cy.get('.header_secondary_container .title'),
    checkedOutItem: () => cy.get('div.inventory_item_name'),
    paymentInfo: () => cy.get('div.summary_info_label').contains('Payment Information'),
    shippingInfo: () => cy.get('div.summary_info_label').contains('Shipping Information'),
    priceInfo: () => cy.get('div.summary_info_label').contains('Price Total'),
    totalInfo: () => cy.xpath("//div[contains(text(),'Total:')]"),
    firstName: () => cy.get('#first-name'),
    lastName: () => cy.get('#last-name'),
    postalCode: () => cy.get('#postal-code'),
    continueBtn: () => cy.get('#continue'),
    finishBtn: () => cy.get('#finish')
  };
  
  clickAddtoCart(item) {
    let str1 = "Sauce Labs Backpack";
    if (item.toLowerCase() === str1.toLowerCase()) {
        this.elements.backPackAddCart().click();
    }
  }

  checkoutCart() {
      this.elements.cartButton().click();
      this.elements.checkoutButton().click();
  }

  verifyCheckout() {
    this.elements.checkoutTitle().should('have.text', 'Checkout: Overview');
    this.elements.paymentInfo().should('be.visible');
    this.elements.shippingInfo().should('be.visible');
    this.elements.priceInfo().should('be.visible');
    this.elements.totalInfo().should('be.visible');
  }

  continueOrder(fname, lname, pcode) {
    this.elements.firstName().type(fname);
    this.elements.lastName().type(lname);
    this.elements.postalCode().type(pcode);
    this.elements.continueBtn().click();
  }

  finishOrder() {
    this.elements.finishBtn().click(); 
  }

}

export const productPage = new ProductPage();
