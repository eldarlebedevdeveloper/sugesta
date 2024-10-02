// Mobile form
$(document).ready(function () {
  $('.navigation-burger').on('click', function () {
    $('.navigation--mobile-menu').slideToggle()
    $('.navigation-open').slideToggle(200)
    $('.navigation-close').slideToggle(200)
    $('.open-text').toggle(200)
    $('.close-text').toggle(200)
  })
})

// Form validation
$(document).ready(function () {
  $('#contact-form').submit(function (e) {
    e.preventDefault()
    let name = $('input[name="user_name"]')
    let phone = $('input[name="user_phone"]')
    let email = $('input[name="user_email"]')
    let message = $('textarea[name="message"]')
    let name_eror = $('#name_error')
    let phone_error = $('#phone_error')
    let email_error = $('#email_error')
    let message_error = $('#message_error')

    if (name.val() === '') {
      e.preventDefault()
      name.addClass('failed')
      name_eror.text('Name field is empty')
      name = false
    } else {
      name.removeClass('failed')
      name_eror.text('')
      name = true
    }
    if (phone.val() === '') {
      e.preventDefault()
      phone.addClass('failed')
      phone_error.text('Phone field is empty')
      phone = false
    } else {
      var phoneRegex = /^[0-9+]+$/
      if (!phoneRegex.test(phone.val())) {
        e.preventDefault()
        phone.addClass('failed')
        phone_error.text('Phone is not correct')
        phone = false
      } else {
        phone.removeClass('failed')
        phone_error.text('')
        phone = true
      }
    }
    if (email.val() === '') {
      e.preventDefault()
      email.addClass('failed')
      email_error.text('Email field is empty')
      emmail = false
    } else {
      var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/
      if (!emailRegex.test(email.val())) {
        e.preventDefault()
        email.addClass('failed')
        email_error.text('Email is not correct')
        email = false
      } else {
        email.removeClass('failed')
        email_error.text('')
        email = true
      }
    }
    if (message.val() === '') {
      e.preventDefault()
      message.addClass('failed')
      message_error.text('Message field is empty')
      message = false
    } else {
      message.removeClass('failed')
      message_error.text('')
      message = true
    }
    if (name && phone && email && message) {
      console.log('Validation succes')
      sendingEmail()
    } else {
      console.log('Validation error')
    }
  })
})

// Sending contact form
function sendingEmail() {
  ;(function () {
    // https://dashboard.emailjs.com/admin/account
    emailjs.init({
      publicKey: 'vOiAmhzBZ5grswip5',
    })
  })()
  emailjs
    .sendForm(
      'service_dko4gkl',
      'template_hyq6d9l',
      document.getElementById('contact-form')
    )
    .then(
      () => {
        console.log('SENDING EMAIL SUCCESS!')
      },
      (error) => {
        console.log('SENDING EMAIL FAILED...', error)
      }
    )
}
