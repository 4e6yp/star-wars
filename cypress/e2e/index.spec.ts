function get(id: string) {
	return cy.findByTestId(id)
}

const IMAGE_URL = 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6'
const AUTHOR_URL = 'https://unsplash.com/@cenali'

describe('Basic flow', () => {
	beforeEach(() => {
		cy.viewport('macbook-13')
	})

	it('Should render the character gallery correctly', () => {
		cy.visit('/')

		cy.findAllByTestId('CharacterCard').should('have.length', 6)
		cy.findAllByTestId('CharacterCardImage')
			.first()
			.should('have.attr', 'src')
			.and('contain', IMAGE_URL)
		cy.findAllByTestId('CharacterImageAuthor')
			.first()
			.should('have.text', 'Matheus Cenali')
			.and('have.attr', 'href', AUTHOR_URL)
			.click()
		cy.findAllByTestId('CharacterCardName').first().should('have.text', 'Apple')
	})

	it('Should navigate to the details page on click', () => {
		cy.visit('/')
		cy.findAllByTestId('CharacterCardName').first().click()
		cy.location('pathname').should('eq', `/apple`)
	})

	it('Should go back to gallery on back button click', () => {
		cy.visit('/apple')
		get('BackLink').click()
		cy.location('pathname').should('eq', '/')
	})

	it('Should navigate to the details page on enter', () => {
		cy.visit('/')
		cy.findAllByTestId('CharacterCard').first().focus().type('{enter}')
		cy.location('pathname').should('eq', `/apple`)
	})

	it('Should render the character details correctly', () => {
		cy.visit('/apple')
		get('CharacterImage').should('have.attr', 'src').and('contain', IMAGE_URL)
		get('CharacterName').should('have.text', 'Apple')
	})

	it('Should render a error message', () => {
		cy.visit('/')
		cy.viewport('iphone-xr')
		cy.intercept('/characters', request => request.destroy()).as('getCharacters')
		cy.reload()
		cy.wait('@getCharacters')
		get('LoadingOrError').should('not.have.text', 'Loading')
	})

	it('Should redirect to gallery when trying to access a invalid character', () => {
		cy.visit('/')
		cy.visit('/cypress')
		cy.location('pathname').should('eq', '/')
	})
})
