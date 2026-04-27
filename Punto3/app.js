document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const navbar = document.getElementById("mainNavbar");
  const themeToggle = document.getElementById("themeToggle");
  const form = document.getElementById("appointmentForm");
  const mascotaSelect = document.getElementById("mascota");
  const otroMascotaWrapper = document.getElementById("otroMascotaWrapper");
  const otroMascotaInput = document.getElementById("otroMascota");
  const toastElement = document.getElementById("formToast");
  const toast = toastElement ? new bootstrap.Toast(toastElement) : null;

  const updateNavbarState = () => {
    if (!navbar) {
      return;
    }

    if (window.scrollY > 24) {
      navbar.classList.remove("navbar-expanded");
      navbar.classList.add("is-compact");
    } else {
      navbar.classList.add("navbar-expanded");
      navbar.classList.remove("is-compact");
    }
  };

  const applyTheme = (isDarkMode) => {
    body.classList.toggle("dark-mode", isDarkMode);
    localStorage.setItem("vetcare-theme", isDarkMode ? "dark" : "light");
  };

  const updateOtroMascotaField = () => {
    const isOtro = mascotaSelect && mascotaSelect.value === "otro";
    if (!otroMascotaWrapper || !otroMascotaInput) {
      return;
    }

    if (isOtro) {
      otroMascotaWrapper.classList.remove("d-none");
      otroMascotaInput.disabled = false;
      otroMascotaInput.required = true;
    } else {
      otroMascotaWrapper.classList.add("d-none");
      otroMascotaInput.disabled = true;
      otroMascotaInput.required = false;
      otroMascotaInput.value = "";
    }
  };

  const savedTheme = localStorage.getItem("vetcare-theme");
  applyTheme(savedTheme === "dark");
  updateNavbarState();
  updateOtroMascotaField();

  window.addEventListener("scroll", updateNavbarState, { passive: true });

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      applyTheme(!body.classList.contains("dark-mode"));
    });
  }

  if (mascotaSelect) {
    mascotaSelect.addEventListener("change", updateOtroMascotaField);
  }

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      event.stopPropagation();

      if (!form.checkValidity()) {
        form.classList.add("was-validated");
        return;
      }

      form.classList.add("was-validated");
      form.reset();
      form.classList.remove("was-validated");
      updateOtroMascotaField();
      if (toast) {
        toast.show();
      }
    });
  }

  document.querySelectorAll(".navbar .nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      const navCollapse = document.getElementById("mainNav");
      if (navCollapse && navCollapse.classList.contains("show")) {
        new bootstrap.Collapse(navCollapse).hide();
      }
    });
  });
});
