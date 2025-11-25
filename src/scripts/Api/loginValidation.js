
/*
export async function loginValidation(inputData) {
    try {
        const res = await fetch('http://localhost:3000/admin/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(inputData)
        });

        const data = await res.json();
        return console.log(data);
    } catch (error) {
        console.log(error);
    }
}
*/

import { apiConfig } from "./apiConfig.js";

export async function loginValidation(inputData) {
  try {
    const res = await fetch(`${apiConfig.baseUrl}admin/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(inputData)
    });

    const data = await res.json();

    if (!res.ok) {
      // manejar errores amigables
      const message = data.error || data.message || 'Login failed';
      console.error("Login error:", message);
      return { ok: false, message };
    }

    // data.user (según la mejora recomendada en backend) o data.adminID
    const user = data.user || data.adminID || null;

    // guardamos en localStorage la info mínima
    if (user) {
      const payload = {
        userName: user.userName || user.UserName || null,
        role: user.role || user.role || 'trainer'
      };
      localStorage.setItem('pdx_user', JSON.stringify(payload));
    }

    return { ok: true, data };

  } catch (error) {
    console.error("Network error:", error);
    return { ok: false, message: error.message };
  }
}
