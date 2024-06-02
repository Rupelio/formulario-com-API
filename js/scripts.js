/*!
* Start Bootstrap - Agency v7.0.12 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    //  Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});


const submitButton = document.getElementById('submitButton');


document 
    .getElementById("contactForm")
    .addEventListener("submit", function(event){
        event.preventDefault();

        const formData = {
            nome: document.getElementById("name").value,
            email: document.getElementById("email").value,
            numero: document.getElementById("phone").value,
            mensagem: document.getElementById("message").value
        };
        console.log("Dados:", formData);
        fetch("http://localhost:3333/cadastro",{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
        .then((response) => response.json())
        .then((data) => {
            console.log("Success:", data);
            alert("Cadastro realizado com sucesso!");
        })
        .catch((error) => {
            console.log("Error:", error);
            alert("Ocorreu um erro ao realizar seu cadastro!");
        });
    });


document.addEventListener('DOMContentLoaded', () => {
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('emailError');

    emailInput.addEventListener('input', () => {
        if (!validateEmail(emailInput.value)) {
            emailError.style.display = 'block';
            emailInput.classList.add('is-invalid');
            submitButton.classList.add('disabled');
        } else {
            emailError.style.display = 'none';
            emailInput.classList.remove('is-invalid');
            submitButton.classList.remove('disabled');
        }
    });

    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const phoneInput = document.getElementById('phone');
    const phoneError = document.getElementById('phoneError');

    phoneInput.addEventListener('input', () =>{
        if(!validatePhone(phoneInput.value)){
            phoneError.style.display = 'block';
            phoneInput.classList.add('is-invalid');
            submitButton.classList.add('disabled');
        } else {
            phoneError.style.display = 'none';
            phoneInput.classList.remove('is-invalid');
            submitButton.classList.remove('disabled');
        }
    });

    function validatePhone(phone){
        const re = /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9]{2})\)?\s?)?((9\d|[9])\d{4})-?(\d{4})$/
        return re.test(phone);
    }
})