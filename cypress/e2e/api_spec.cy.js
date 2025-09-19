//<reference types="cypress" />


describe('Demoblaze API - Signup & Login (API tests)', () => {
  const base = Cypress.config('baseUrl') || 'https://api.demoblaze.com';
  const password = 'P@ssw0rd!';

  let createdUsername = null;

  function normalizeBody(resp) {
    return (typeof resp.body === 'string') ? resp.body : JSON.stringify(resp.body);
  }

  it('Crear un nuevo usuario en signup', () => {
    createdUsername = `user_${Date.now()}`;
    cy.request({
      method: 'POST',
      url: `${base}/signup`,
      body: { username: createdUsername, password },
      failOnStatusCode: false
    }).then((resp) => {
      const body = normalizeBody(resp);
      cy.log('signup response body: ' + body);
      // Aserción: mensaje esperado
      expect(body).to.include('Sign up successful');
      // opcional: guardar para siguientes tests
      expect(createdUsername).to.be.a('string');
    });
  });

  it('Intentar crear un usuario ya existente (signup)', () => {
    // requiere el usuario creado en el test anterior
    expect(createdUsername, 'usuario creado en test anterior').to.be.a('string');
    cy.request({
      method: 'POST',
      url: `${base}/signup`,
      body: { username: createdUsername, password },
      failOnStatusCode: false
    }).then((resp) => {
      const body = normalizeBody(resp);
      cy.log('signup(existing) response body: ' + body);
      expect(body).to.include('This user already exist');
    });
  });

  it('Usuario y password correcto en login', () => {
    expect(createdUsername, 'usuario creado en test anterior').to.be.a('string');
    cy.request({
      method: 'POST',
      url: `${base}/login`,
      body: { username: createdUsername, password },
      failOnStatusCode: false
    }).then((resp) => {
      const body = normalizeBody(resp);
      cy.log('login response body: ' + body);
      expect(body).to.include('Auth_token');
      // Extraer token si está en formato "Auth_token: <token>"
      const match = body.match(/Auth_token:\s*([A-Za-z0-9=+\/\-]+)/);
      if (match) {
        const token = match[1];
        cy.log('Token capturado: ' + token);
        cy.wrap(token).as('authToken');
      }
    });
  });

  it('Usuario y password incorrecto en login (usuario inexistente / credenciales inválidas)', () => {
    const fakeUser = `no_user_${Date.now()}`;
    cy.request({
      method: 'POST',
      url: `${base}/login`,
      body: { username: fakeUser, password: 'badpassword' },
      failOnStatusCode: false
    }).then((resp) => {
      const body = normalizeBody(resp);
      cy.log('login invalid response body: ' + body);
      // Aceptamos cualquiera de los mensajes de fallo conocidos
      expect(
        body.includes('User does not exist') ||
        body.includes('Wrong password') ||
        !body.includes('Auth_token')
      ).to.equal(true);
    });
  });

});

