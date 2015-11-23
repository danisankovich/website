jQuery(function($) {
  $("#contact_form").submit(function() {
    var email = $("#email").val();
    var name = $("#name").val();
    var msg = $("#msg").val();
    $.ajax({
        type: "POST",
        url: "https://mandrillapp.com/api/1.0/messages/send.json",
        data: {
          'key': 'MDTpzgc6BNZ7carbIFxuYw',
          'message': {
            'from_email': email,
            'from_name': name,
            'headers': {
              'Reply-To': email
            },
            'subject': 'Hello Michael',
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
        $("#name").val('');
        $("#email").val('');
        $("#msg").val('');
      })
      .fail(function(response) {
        sweetAlert({
	         title: "Oops!",
           text: "Something went wrong on the page!",
           type: "error"
         });
      });
    return false;
  });
});
