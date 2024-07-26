describe('Testes do site Livraria Leitura', function () {

    it('Realiza várias interações no site', function () {

        // Define a resolução da viewport
        cy.viewport(1536, 695);

        // Visita a página inicial
        cy.visit('https://leitura.com.br/');

        // Interage com os menus de navegação
        cy.get('.navbar > .collapse > .nav > .dropdown:nth-child(2) > .dropdown-toggle').click();
        cy.get('.open > .dropdown-menu > .dropdown-inner > .list-unstyled:nth-child(1) > li:nth-child(2) > a').click();

        // Visita uma categoria específica
        cy.visit('https://leitura.com.br/livros/gastronomia-e-culinaria');
        cy.get('.product-layout:nth-child(4) > .product-thumb > .image > a > .img-responsive').click();

        // Visita um produto específico
        cy.visit('https://leitura.com.br/hamburguer-vegetariano-L047-9788594111180');
        cy.get('body > footer > #privacy_disclaimer > a > .btn-primary').click();

        // Navega para outra categoria
        cy.get('.dropdown:nth-child(5) > .dropdown-menu:nth-child(2) > .dropdown-inner > .list-unstyled:nth-child(2) > li:nth-child(1) > a').click();
        cy.visit('https://leitura.com.br/informatica/computador-monitor-impressora');
        cy.get('.dropdown:nth-child(2) > .dropdown-menu > .dropdown-inner > .list-unstyled:nth-child(1) > li:nth-child(9) > a').click();

        // Visita outra categoria
        cy.visit('https://leitura.com.br/livros/quadrinhos-e-graphic-novels');
        cy.get('.list-group > .list-group-item > #filter-group25 > .checkbox:nth-child(6) > label').click();

        // Marca um checkbox 
        cy.get('.list-group-item > #filter-group25 > .checkbox:nth-child(6) > label > input[type="checkbox"]').check();
        cy.get('#column-left > .panel > .list-group > .panel-footer > .btn').click();

        // Realiza uma pesquisa
        cy.get('.container > .row > .col-sm-5 > #search > .form-control').type('infantil');
        cy.get('.row > .col-sm-5 > #search > .input-group-btn > .btn').click();

        // Navega nas páginas de resultados da pesquisa
        cy.get('.row > .col-sm-6 > .pagination > li:nth-child(2) > a').click();

        // Realiza outra pesquisa
        cy.get('.container > .row > .col-sm-5 > #search > .form-control').type('aventura');
        cy.get('.row > .col-sm-5 > #search > .input-group-btn > .btn').click();

        // Visita um produto dos resultados da pesquisa
        cy.get('.product-layout:nth-child(13) > .product-thumb > .image > a > .img-responsive').click();
        cy.visit('https://leitura.com.br/aventuras-sonoras-selva-L052-9786555075540');

        // Volta para a página inicial
        cy.get('.row > .col-sm-4 > #logo > a > .img-responsive').click();

    });

});
