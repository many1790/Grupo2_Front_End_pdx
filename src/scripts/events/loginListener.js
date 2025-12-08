import { loginValidation } from "../Api/loginValidation.js";

export function listenerLogin(form, user, password) {
  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = {
      userID: user.value,
      userPASS: password.value,
    };

    const result = await loginValidation(formData);

    if (!result.ok) {
      alert(result.message || "Login fallido");
      return;
    }

    const stored = JSON.parse(localStorage.getItem("pdx_user"));

    if (!stored) {
      alert("Error inesperado.");
      return;
    }

    if (stored.mode === "admin") {
      window.location.href = "/index2.html";
      return;
    }

    if (stored.mode === "pokemon") {
      window.location.href = "/index3.html";
      return;
    }

    alert("No se pudo determinar el tipo de acceso.");
  });
}
