document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("contactModal");
  const contactButton = document.getElementById("contactButton");
  const closeButton = document.getElementById("closeButton");
  const form = document.getElementById("contactForm");
  const formContent = document.querySelector(".form-content");
  const successMessage = document.querySelector(".success-message");
  const submitButton = document.querySelector(".submit-btn");

  // Form fields
  const fields = {
    name: {
      element: document.getElementById("name"),
      validate: (value) => value.trim().length >= 2,
    },
    mobile: {
      element: document.getElementById("mobile"),
      validate: (value) => /^[0-9]{10}$/.test(value.trim()),
    },
    email: {
      element: document.getElementById("email"),
      validate: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim()),
    },
    message: {
      element: document.getElementById("message"),
      validate: (value) => value.trim().length >= 10,
    },
  };

  // Modal controls
  function openModal() {
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    modal.classList.remove("active");
    document.body.style.overflow = "";
    resetForm();
  }

  // Form validation and submission
  function validateField(field, showError = true) {
    const value = field.element.value;
    const isValid = field.validate(value);
    const formGroup = field.element.closest(".form-group");

    if (showError) {
      formGroup.classList.toggle("error", !isValid);
    }

    return isValid;
  }

  function validateForm() {
    let isValid = true;

    for (const fieldName in fields) {
      if (!validateField(fields[fieldName])) {
        isValid = false;
      }
    }

    return isValid;
  }

  function resetForm() {
    form.reset();
    formContent.style.display = "block";
    successMessage.classList.remove("active");

    // Reset all error states
    for (const fieldName in fields) {
      const formGroup = fields[fieldName].element.closest(".form-group");
      formGroup.classList.remove("error");
    }
  }

  // Event listeners
  contactButton.addEventListener("click", openModal);

  closeButton.addEventListener("click", closeModal);

  modal.addEventListener("click", function (event) {
    if (event.target === modal) {
      closeModal();
    }
  });

  // Live validation on blur
  for (const fieldName in fields) {
    fields[fieldName].element.addEventListener("blur", function () {
      validateField(fields[fieldName]);
    });
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    if (validateForm()) {
      // Show loading state
      submitButton.classList.add("loading");
      submitButton.disabled = true;

      // Simulate form submission
      setTimeout(() => {
        submitButton.classList.remove("loading");
        submitButton.disabled = false;
        formContent.style.display = "none";
        successMessage.classList.add("active");

        // Auto close after 3 seconds
        setTimeout(closeModal, 3000);
      }, 1500);
    }
  });

  // Keyboard accessibility
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && modal.classList.contains("active")) {
      closeModal();
    }
  });
});
