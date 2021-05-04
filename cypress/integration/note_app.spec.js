/// <reference types="Cypress"/>
import { v4 as uuidv4 } from 'uuid'

describe('Note App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')

    cy.request('POST', 'http://localhost:3001/api/testing/reset')

    const user = {
      name: 'Pablo',
      username: 'pablets',
      password: 'afrastraslafra',
    }

    cy.request('POST', 'http://localhost:3001/api/users/', user)
  })
  it('frontpage can be opened', () => {
    cy.contains('Notes')
  })
  it('login form can be opened', () => {
    cy.contains('Show Login').click()
  })
  it('user can login', () => {
    cy.contains('Show Login').click()
    cy.get('input').first().type('pablets')
    cy.get('input').last().type('afrastraslafra')
    cy.get('#form-login-button').click()
    cy.contains('Create a new note')
  })
  it('login fails with wrong password', () => {
    cy.contains('Show Login').click()
    cy.get('input').first().type('pablets')
    cy.get('input').last().type('a very bad password')
    cy.get('#form-login-button').click()
    cy.get('.error').should('contain', 'Wrong credentials')
  })

  describe('when logged in', () => {
    const noteContent = `A random note with ID: ${uuidv4()}`
    beforeEach(() => {
      cy.login({ username: 'pablets', password: 'afrastraslafra' })
    })
    it('a new note can be created', () => {
      cy.contains('Show Create Note').click()
      cy.get('input').type(noteContent)
      cy.contains('save').click()
      cy.contains(noteContent)
    })
    describe('and a note exist', () => {
      beforeEach(() => {
        cy.createNote({
          content: 'A note created with Cypress',
          important: false,
        })
        cy.createNote({
          content: 'Second note created with Cypress',
          important: false,
        })
        cy.createNote({
          content: 'Third note created with Cypress',
          important: false,
        })

        cy.visit('http://localhost:3000')
      })

      it('can be made important', () => {
        cy.contains('Second note created with Cypress').as('noteToEval')

        cy.get('@noteToEval').contains('make important').click()

        cy.get('@noteToEval').contains('make not important')
      })
    })
  })
})
