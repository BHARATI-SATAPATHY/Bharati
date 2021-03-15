
/// <reference types = 'cypress-downloadfile' />


it('file upload demo', function(){

       cy.visit('https://filebin.net/')
       cy.get('#fileField').attachFile('CypressIssue.png')

    //cy.visit('http://tinyupload.com/')
     //cy.get('[name="upload_file"]').attachFile('CypressIssue.png')

})

//it('File download demo', function(){

    //cy.downloadFile('https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg','mydownloads','example.jpg')
//})
