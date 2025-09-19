describe('Flujo de compra en OpenCart', () => {

  it('Debería completar una compra como invitado', () => {
    // Paso 1: Entrar al sitio
    cy.visit('http://opencart.abstracta.us/');

    // Paso 2: Agregar dos productos al carrito
    cy.contains('MacBook').click();
    cy.get('#button-cart').click();
    cy.go('back'); // volver atrás
    cy.contains('iPhone').click();
    cy.get('#button-cart').click();

    // Paso 3: Ver el carrito
    cy.get('#cart-total').click();
    cy.contains('View Cart').click();

    // Paso 4: Iniciar Checkout como invitado
    cy.contains('Checkout').click();
    
cy.origin('https://opencart.abstracta.us', () => {

    cy.get('input[value="guest"]').check(); // seleccionar Guest Checkout
    cy.get('#button-account').click();

    // Completar datos de facturación
    cy.get('#input-payment-firstname').type('Leisly');
    cy.get('#input-payment-lastname').type('Gutierrez');
    cy.get('#input-payment-email').type('correo@ejemplo.com');
    cy.get('#input-payment-telephone').type('3001234567');
    cy.get('#input-payment-address-1').type('Calle 123');
    cy.get('#input-payment-city').type('Bogotá');
    cy.get('#input-payment-postcode').type('110111');
    cy.get('#input-payment-country').select('Colombia');
    cy.get('#input-payment-zone').select('Bogota D.C.');
    cy.get('#button-guest').click();

    // Confirmar método de entrega y pago
    cy.get('#button-shipping-method').click();
    cy.get('input[name="agree"]').check(); // aceptar términos
    cy.get('#button-payment-method').click();

    // Paso 5: Confirmar orden
    cy.get('#button-confirm').click();

    // Verificar mensaje de éxito
    cy.contains('Your order has been placed!').should('be.visible');
  });
});
});
