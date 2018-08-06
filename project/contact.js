// Register the listener.
// Form submission listener taken from Eloquent JavaScript, Ch. 18.
let form = document.querySelector("#contact_form");
form.addEventListener("submit", event => { validateContactForm(form, event) });

function validateContactForm(form, event) {
    let valid = true;
    let errors = "";

    // Using form.elements.namedItem() to fetch the values. Source: https://www.w3schools.com/jsref/coll_form_elements.asp
    // name needs to be non-empty
    if (!form.elements.namedItem("name").length > 0) {
        valid = false;
        errors += "* Please provide your name.\n";
    }

    // email needs to be non-empty
    if (!form.elements.namedItem("email").length > 0) {
        valid = false;
        errors += "* Please provide your e-mail address.\n";
    }

    // message needs to be non-empty
    if (!form.elements.namedItem("message").length > 0) {
        valid = false;
        errors += "* Please enter a message, so we know what you're asking about!\n";
    }

    // E-mail and phone need to be valid, but this is handled automatically by Bootstrap.

    if (!valid) {
        alert("Please correct the following errors:\n" + errors);
        // Halt the form submission if there's an error. Source: Eloquent JavaScript, Ch. 18.
        event.preventDefault();
    }
}
