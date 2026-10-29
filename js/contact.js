const contactForm = document.querySelector("#contact-form");

if (contactForm) {
    const nameInput = document.querySelector("#name");
    const emailInput = document.querySelector("#email");
    const messageInput = document.querySelector("#message");
    const nameError = document.querySelector("#name-error");
    const emailError = document.querySelector("#email-error");
    const messageError = document.querySelector("#message-error");
    const formNotification = document.querySelector("#form-notification");

    function clearFieldError(input, errorElement) {
        input.removeAttribute("aria-invalid");
        errorElement.textContent = "";
    }

    function showFieldError(input, errorElement, message) {
        input.setAttribute("aria-invalid", "true");
        errorElement.textContent = message;
    }

    nameInput.addEventListener("input", function () {
        clearFieldError(nameInput, nameError);
    });

    emailInput.addEventListener("input", function () {
        clearFieldError(emailInput, emailError);
    });

    messageInput.addEventListener("input", function () {
        clearFieldError(messageInput, messageError);
    });

    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();
        let formIsValid = true;

        clearFieldError(nameInput, nameError);
        clearFieldError(emailInput, emailError);
        clearFieldError(messageInput, messageError);
        formNotification.hidden = true;
        formNotification.className = "form-notification";
        formNotification.textContent = "";

        const nameValue = nameInput.value.trim();
        const emailValue = emailInput.value.trim();
        const messageValue = messageInput.value.trim();

        if (nameValue === "") {
            showFieldError(nameInput, nameError, "Nama tidak boleh kosong");
            formIsValid = false;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailValue === "") {
            showFieldError(emailInput, emailError, "Email tidak boleh kosong.");
            formIsValid = false;
        } else if (!emailPattern.test(emailValue)) {
            showFieldError(emailInput, emailError, "Format email salah.");
            formIsValid = false;
        }

        if (messageValue === "") {
            showFieldError(messageInput, messageError, "Pesan tidak boleh kosong.");
            formIsValid = false;
        }

        formNotification.hidden = false;

        if(!formIsValid) {
            formNotification.classList.add("error");
            formNotification.textContent = "Pastikan data sudah sesuai.";
            return;
        }

        formNotification.classList.add("success");
        formNotification.textContent = "Simulasi validasi berhasil!"

        contactForm.reset()
    });
}