document.addEventListener("DOMContentLoaded", function() {
  var elements = document.getElementsByTagName("INPUT");
  var errormsg = document.getElementsByClassName("errmsg");
  var field = document.getElementsByClassName("field");
  var email = document.getElementById("email");

  for (var i = 0; i < elements.length; i++) {
    elements[i].oninvalid = function(e) {
      e.target.setCustomValidity("");
      if (!e.target.validity.valid) {
        for (let a = 0; a < errormsg.length; a++) {
          errormsg[a].style.display = "block";
          elements[a].style.background =
            "url('/images/icon-error.svg') no-repeat right";
          field[a].style.border = "1.5px solid var(--red)";
        }
        email.placeholder = "email@example.com";
      }
    };
    elements[i].oninput = function(e) {
      e.target.setCustomValidity("");
    };
  }


});
