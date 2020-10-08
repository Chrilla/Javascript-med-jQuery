$(function() {

    document.getElementById('loginemail').addEventListener('blur', validateLoginEmail);
    document.getElementById('loginpassword').addEventListener('blur', validateLoginPassword);

    function validateLoginEmail() {
        let loginemail = document.getElementById('loginemail')
        let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,20})+$/
        let error = $('#loginemail_error')

     if (!regex.test(loginemail.value)) {
        loginemail.classList.add('is-invalid')
        error.html('Fyll i en email adress enligt formatet: frontend@hotmail.com.')
      } else {
        loginemail.classList.remove('is-invalid')
        loginemail.classList.add('is-valid')
        error.html('')
      }
    }

    function validateLoginPassword() {
        let loginpassword = document.getElementById('loginpassword')
        let regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
        let error = $('#loginpassword_error')

        if (!regex.test(loginpassword.value)) {
            loginpassword.classList.add('is-invalid')
            error.html('Fyll i en korrekt lösenord.')
          } else {
            loginpassword.classList.remove('is-invalid')
            loginpassword.classList.add('is-valid')
            error.html('')
      }
    }

    $('#loginform').on('submit', function(e) {
        e.preventDefault();
        validateLoginEmail();
        validateLoginPassword();
        if($('#loginemail').val().length >= 5 && $('#loginpassword').val().length >= 6)
    {
        window.location.replace("loggedin.html");
    }
    })
})