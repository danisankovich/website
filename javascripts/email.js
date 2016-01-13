jQuery(function($) {
  $('.sendMail').on("click", function() {
    var email = $("#Email").val();
    var name = $("#Name").val();
    var subject = $("#Subject").val();
    var msg = $("#msg").val();
    if(email && name && subject && msg) {
      $.ajax({
          type: "POST",
          url: "https://mandrillapp.com/api/1.0/messages/send.json",
          data: {
            'key': 'MDTpzgc6BNZ7carbIFxuYw',
            'message': {
              'from_email': email,
              'from_name': name,
              'subject': subject,
              'headers': {
                'Reply-To': email
              },
              'text': msg,
              'to': [{
                'email': 'misankovich@gmail.com',
                'name': 'Michael Sankovich',
                'type': 'to'
              }]
            }
          }
        })
        .done(function(response) {
          sweetAlert({title: "Your message has been sent.",
                      text: "Thank you! I will be in touch as soon as possible.",
                      type: "success"});
          $("#Name").val('');
          $("#Email").val('');
          $("#msg").val('');
          $("#Subject").val('');
          $('#emailModal').closeModal();
        })
        .fail(function(response) {
          sweetAlert({
  	         title: "Oops!",
             text: "Something went wrong on the page!",
             type: "error"
           });
        });
      }
      else {
        sweetAlert({
           title: "Oops!",
           text: "All Fields Are Required",
           type: "error"
         });
      }
    return false;
  });
});
