function SendRSVP() {
   var names = document.getElementById('people').value;
   if (names != "") {
   emailjs.init("user_o7YNZjqBdRp36dgWXDkD5");
    emailjs.send("gmail", "template_birthday", { your_names: names })
  	.then(function () {
  	    document.getElementById('rsvp_confirm').style.display = 'block';
      	    document.getElementById('rsvp_error').style.display = 'none';
	    document.getElementById('rsvp_invalid').style.display = 'none';
  	}, function (err) {
  	    document.getElementById('rsvp_error').style.display = 'block';
      	    document.getElementById('rsvp_confirm').style.display = 'none';
	    document.getElementById('rsvp_invalid').style.display = 'none';
  	});
    }
    else {
      document.getElementById('rsvp_invalid').style.display = 'block';
      document.getElementById('rsvp_confirm').style.display = 'none';
      document.getElementById('rsvp_error').style.display = 'none';
    }
    return false;
  }