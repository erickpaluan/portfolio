/*!
* Start Bootstrap - Resume v7.0.5 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/

// Scripts

window.addEventListener('DOMContentLoaded', event => {

    // Ativar Bootstrap scrollspy no elemento principal de navegação
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            offset: 74, // Offset ajustável para personalização
        });
    }

    // Função para colapsar a navbar quando o toggler estiver visível
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map((responsiveNavItem) => {
        responsiveNavItem.addEventListener('click', () => {
            // Verifica se o toggler está visível antes de fechar a navbar
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });
});
