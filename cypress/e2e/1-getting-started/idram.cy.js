describe("test",()=>{
    beforeEach(()=>{
        cy.visit("https://idram.am")
    })
    it("login idram positive (valid email, valid password)",()=>{

        function login(user, pass) {

            
        // click on login button
        cy.get('.pr-2')
            .should("be.visible")
            .click();

        // type username (phonenumber)
        cy.get('#username')
            .clear()
            .type(user);
        
        // click continue button
        cy.get('#authSumbitButton')
            .click()

        // password field should open
        cy.get('[data-tr-code="auth_password"]')   
            .should("be.visible")

        // type pass
        cy.get('[id="loginPassword"]')
            .type(pass)

        // click login button
        cy.get('#authSumbitButton')
            .click();

        // check if loged in
        cy.contains("Ինչպե՞ս եք ցանկանում ստանալ հաստատման կոդը")
            .should("be.visible")
        }

        login("77017702","Chgitem84$")

    })
});