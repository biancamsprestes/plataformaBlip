/// <reference types="cypress" />


context('Processo Seletivo - Take Blip - Questão 11', () => {

    //Teste 1:
    it('Login na Plataforma Blip - Usuário existente', () => {
        cy.visit("https://account.blip.ai/login")
        cy.contains('To get started, login into your account:')
        cy.get('input[id=email]').type('bianca.martinssouzaprestes@gmail.com')
        cy.get('input[type=password]').type('Usuario@12')
        cy.get('button[id=blip-login]').click()

    
    })
 //Teste 2:
    it('Conferindo os dados do usuário logado', () => {

        cy.contains('Minha conta')
        cy.contains('Bianca Martins Souza Prestes')
        cy.contains('bianca.martinssouzaprestes@gmail.com')
        cy.contains('(51) 99121-1626')
        cy.contains('https://github.com/biancamsprestes')
    })



    });
