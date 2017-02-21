jQuery(function($) {
  $("#emailForm").submit(function(e) {
    let errors = {};
    $("#emailForm input").each(function() {
      if ($(this).attr('name') !== 'submit') {
        const value = $(this).val();
        const name = $(this).attr('name');
        if (value.length === 0) {
          errors[name] = value;
        }
      }
    });
    $("#emailForm textarea").each(function() {
      const value = $(this).val();
      const name = $(this).attr('name');
      if (value.length === 0) {
        errors[name] = value;
      }
    });
    if (Object.keys(errors).length !== 0) {
      sweetAlert({
        title: "Oops!",
        text: "All Fields Are Required",
        type: "error"
      });
      e.preventDefault();
    }
    else {
      alert('email sent');
    }
  });
});
