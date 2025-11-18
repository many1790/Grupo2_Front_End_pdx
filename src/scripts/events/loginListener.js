


// LOGIN FORM LISTENER

export function listenerLogin(form, user, password) {
    form.addEventListener('submit', (event) => {
        //prevents
        event.preventDefault();
        //forms an object with login data
        const formData = {
            userID: user.value,
            userPASS: password.value
        };
        //testing data processed
        console.log(formData);
    })
}