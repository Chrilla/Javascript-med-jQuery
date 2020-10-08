$(function() {

    document.getElementById('firstName').addEventListener('blur', validateFirstName)
    document.getElementById('lastName').addEventListener('blur', validateLastName)
    document.getElementById('address').addEventListener('blur', validateAddress)
    document.getElementById('city').addEventListener('blur', validateCity)
    document.getElementById('zip').addEventListener('blur', validateZip)
    document.getElementById('phoneNumber').addEventListener('blur', validatePhoneNumber)
    document.getElementById('email').addEventListener('blur', validateEmail)
    document.getElementById('textarea').addEventListener('blur', validateTextArea)
    document.getElementById('inputPassword').addEventListener('blur', validatePassword)
    document.getElementById('checkbox').addEventListener('blur', validateCheckBox)
    document.getElementById('country').addEventListener('blur', validateCountry)

    function validateFirstName() {
        let firstName = document.getElementById('firstName')
        let regex = /^[a-zA-Z]{2,30}$/
        let error = $('#firstName_error')

        if(!regex.test(firstName.value)) {
            firstName.classList.add('is-invalid')
            error.html('Fältet måste innehålla mellan 2-30 bokstäver.')
        } else {
            firstName.classList.remove('is-invalid')
            firstName.classList.add('is-valid')
            error.html('')
        }
    }

    function validateLastName() {
        let lastName = document.getElementById('lastName')
        let regex = /^[a-zA-Z]{2,30}$/
        let error = $('#lastName_error')

        if(!regex.test(lastName.value)) {
            lastName.classList.add('is-invalid')
            error.html('Fältet måste innehålla mellan 2-30 bokstäver.')
        } else {
            lastName.classList.remove('is-invalid')
            lastName.classList.add('is-valid')
            error.html('')
        }
    }

    function validateAddress() {
        let value = $('#address').val()
        let error = $('#address_error')   

        if(value.length < 2) {
            address.classList.add('is-invalid')
            error.html('Adressen måste innehålla minst två bokstäver.')
        }
        else {
            address.classList.remove('is-invalid')
            address.classList.add('is-valid')
            error.html('')
        }
    }

    function validateCity() {
        let city = document.getElementById('city')
        let regex = /^[a-zA-Z]{2,30}$/
        let error = $('#city_error')

        if(!regex.test(city.value)) {
            city.classList.add('is-invalid')
            error.html('Fältet måste innehålla mellan 2-30 bokstäver.')
        } else {
            city.classList.remove('is-invalid')
            city.classList.add('is-valid')
            error.html('')
        }
    }

    function validateZip() {
        let zip = document.getElementById('zip')
        let regex = /^[0-9]{5}$/
        let error = $('#zip_error')

        if(!regex.test(zip.value)) {
            zip.classList.add('is-invalid')
            error.html('Fältet måste innehålla fem siffror.')
        } else {
            zip.classList.remove('is-invalid')
            zip.classList.add('is-valid')
            error.html('')
        }
    }

    function validatePhoneNumber() {
        let phoneNumber = document.getElementById('phoneNumber')
        let regex = /^[0-9\-\+]{10,11}$/
        let error = $('#phoneNumber_error')

        if(!regex.test(phoneNumber.value)) {
            phoneNumber.classList.add('is-invalid')
            error.html('Fältet måste innehålla mellan 10-11 siffror.')
        } else {
            phoneNumber.classList.remove('is-invalid')
            phoneNumber.classList.add('is-valid')
            error.html('')
        }
    }

    function validateEmail() {
        let email = document.getElementById('email')
        let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,20})+$/
        let error = $('#email_error')

     if (!regex.test(email.value)) {
        email.classList.add('is-invalid')
        error.html('Fyll i en email adress enligt formatet: frontend@hotmail.com.')
      } else {
        email.classList.remove('is-invalid')
        email.classList.add('is-valid')
        error.html('')
      }
    }

    function validateCountry() {
        if($('country').val() === '') {
            $('country').addClass('is-invalid')
        } else {
            $('#country').addClass('is-valid')
        }
    }
    
    $('#inputPassword, #confirmPassword').on('keyup', function () {
            $('#ipwtext').html('Lösenordskrav: 6-20 tecken, en liten bokstav och en stor bokstav.')
        if ($('#inputPassword').val() == $('#confirmPassword').val()) {
          $('#message').html('Lösenorden matchar.').css('color', 'green')
        } else 
          $('#message').html('Lösenorden matchar inte.').css('color', 'red')
      })

      function validatePassword() {
        let inputPassword = document.getElementById('inputPassword')
        let regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/
        let error = $('#password_error')

        if (!regex.test(inputPassword.value)) {
            $('#ipwtext').html('')
            error.html('Fyll i ett korrekt lösenord enligt kraven.')
        } else {
            error.html('')
      }
    }

    function validateTextArea() {
        if($('textarea').val() === '') {
            $('textarea').addClass('is-valid')
        } else {
            $('textarea').addClass('is-valid')
        }
    }

    function validateCheckBox() {
        let error = $('#checkbox_error')

        if(!this.regForm.checkbox.checked) {
            error.html('Du måste acceptera användarvillkoren samt integritetspolicyn.')
            $('#checkbox_message').html('')
        } else {
            error.html('')
            $('#checkbox_message').html('Du har accepterat villkoren.').css('color', 'green')
        }
    }

    function emptyField(id) {
        if($(id).val() === '') {
            $(id).addClass('is-invalid')
            $(id).focus();
        } else {
            $(id).removeClass('is-invalid')
        }
    }

    $('#regForm').on('submit', function(e) {
        let error = $('#radiobutton_error')

        if ($('input[name="radiobutton"]:checked').length == 0) {
            error.html('Du måste välja ett kön.')
        } else {
            error.html('')
            $('#radio1, #radio2, #radio3').addClass('is-valid')
        }
     });

     $('#regForm').on('submit', function() {
        if($('#firstName').val().length >= 2 && $('#lastName').val().length >= 2 && $('#address').val().length >= 2 && $('#city').val().length >= 2 && $('#zip').val().length == 5 && $('#phoneNumber').val().length >= 10 && $('#email').val().length >= 5 && $('#inputPassword').val().length >= 6 && $('#confirmPassword').val().length >= 6 && $('input[name="radiobutton"]:checked').length == 1 && $('#checkbox:checked').length == 1)
    {
        window.location.replace("login.html")
    }
    })
    
    $('#regForm').on('submit', function(e) {
        e.preventDefault() //förhindra att den skickar datat och laddar om sidan
        validateFirstName()
        validateLastName()
        validateAddress()
        validateCity()
        validateEmail()
        validateTextArea()
        validateCountry()
        validatePassword()
        validateCheckBox()
        emptyField('#firstName')
        emptyField('#lastName')
        emptyField('#address')
        emptyField('#radio1')
        emptyField('#radio2')
        emptyField('#radio3')
        emptyField('#city')
        emptyField('#country')
        emptyField('#zip')
        emptyField('#phoneNumber')
        emptyField('#inputPassword')
        emptyField('#confirmPassword')
        emptyField('#checkbox')
    });
});