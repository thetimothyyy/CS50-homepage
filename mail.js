(function() {
    emailjs.init('sBciBXKY4rXQkXl_V');
}())

window.onload = function() {
    const formAlert = document.getElementById('form-alert')

    // Alert function to construct dismissible alert
    const alertMessage = (message, type) => {
        const wrapper = document.createElement('div')
        wrapper.innerHTML = [
            `<div class="alert alert-${type} alert-dismissible" role="alert">`,
            `   <div>${message}</div>`,
            '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
            '</div>'
        ].join('')

        formAlert.append(wrapper)
    }

    // listen to the form submission
    document.getElementById("myForm")
    .addEventListener("submit", function(event) {
    event.preventDefault();

    const serviceID = "service_tx5cl2o";
    const templateID = "template_49y39lf";

    // send the email here
    emailjs.sendForm(serviceID, templateID, this).then(
        function() {
            console.log('SUCCESS!');
            document.getElementById("myForm").reset()
            alertMessage('Message sent successfully', 'success')
            // TODO: Add alert if message sent successfully
        }, function(error) {
            console.log('FAILED...', error);
            document.getElementById("myForm").reset()
            alertMessage('Something went wrong. Please try again', 'danger')
            // TODO: Add alert if message sent successfully
        }
    );
    });
}
