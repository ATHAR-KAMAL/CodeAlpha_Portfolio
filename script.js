// Contact form

const form = document.querySelector(".contact-form");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    alert("Thank you for your message!");

    form.reset();

});