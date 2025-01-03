var form_1 = document.querySelector(".form_1");
var form_2 = document.querySelector(".form_2");
var form_3 = document.querySelector(".form_3");
var form_4 = document.querySelector(".form_4");
var form_5 = document.querySelector(".form_5");
var form_6 = document.querySelector(".form_6");

var form_1_btns = document.querySelector(".form_1_btns");
var form_2_btns = document.querySelector(".form_2_btns");
var form_3_btns = document.querySelector(".form_3_btns");
var form_4_btns = document.querySelector(".form_4_btns");
var form_5_btns = document.querySelector(".form_5_btns");
var form_6_btns = document.querySelector(".form_6_btns");

var form_1_next_btn = document.querySelector(".form_1_btns .btn_next");
var form_2_back_btn = document.querySelector(".form_2_btns .btn_back");
var form_2_next_btn = document.querySelector(".form_2_btns .btn_next");
var form_3_back_btn = document.querySelector(".form_3_btns .btn_back");
var form_3_next_btn = document.querySelector(".form_3_btns .btn_next");
var form_4_back_btn = document.querySelector(".form_4_btns .btn_back");
var form_4_next_btn = document.querySelector(".form_4_btns .btn_next");
var form_5_back_btn = document.querySelector(".form_5_btns .btn_back");
var form_5_next_btn = document.querySelector(".form_5_btns .btn_next");
var form_6_back_btn = document.querySelector(".form_6_btns .btn_back");

var form_2_progessbar = document.querySelector(".form_2_progessbar");
var form_3_progessbar = document.querySelector(".form_3_progessbar");
var form_4_progessbar = document.querySelector(".form_4_progessbar");
var form_5_progessbar = document.querySelector(".form_5_progessbar");
var form_6_progessbar = document.querySelector(".form_6_progessbar");

var btn_done = document.querySelector(".btn_done");
var modal_wrapper = document.querySelector(".modal_wrapper");
var shadow = document.querySelector(".shadow");

form_1_next_btn.addEventListener("click", function(){
    form_1.style.display = "none";
    form_2.style.display = "block";

    form_1_btns.style.display = "none";
    form_2_btns.style.display = "flex";

    form_2_progessbar.classList.add("active");
});

form_2_back_btn.addEventListener("click", function(){
    form_1.style.display = "block";
    form_2.style.display = "none";

    form_1_btns.style.display = "flex";
    form_2_btns.style.display = "none";

    form_2_progessbar.classList.remove("active");
    form_5("none");
});

form_2_next_btn.addEventListener("click", function(){
    form_2.style.display = "none";
    form_3.style.display = "block";

    form_3_btns.style.display = "flex";
    form_2_btns.style.display = "none";

    form_3_progessbar.classList.add("active");
});

form_3_back_btn.addEventListener("click", function(){
    form_2.style.display = "block";
    form_3.style.display = "none";

    form_3_btns.style.display = "none";
    form_2_btns.style.display = "flex";

    form_3_progessbar.classList.remove("active");
    form_5("none");
});

form_3_next_btn.addEventListener("click", function(){
    form_3.style.display = "none";
    form_4.style.display = "block";

    form_4_btns.style.display = "flex";
    form_3_btns.style.display = "none";

    form_4_progessbar.classList.add("active");
});

form_4_back_btn.addEventListener("click", function(){
    form_3.style.display = "block";
    form_4.style.display = "none";

    form_4_btns.style.display = "none";
    form_3_btns.style.display = "flex";

    form_4_progessbar.classList.remove("active");
    form_5("none");
});

form_4_next_btn.addEventListener("click", function(){
    form_4.style.display = "none";
    form_5.style.display = "block";

    form_5_btns.style.display = "flex";
    form_4_btns.style.display = "none";

    form_5_progessbar.classList.add("active");
});

form_5_back_btn.addEventListener("click", function(){
    form_4.style.display = "block";
    form_5.style.display = "none";

    form_5_btns.style.display = "none";
    form_4_btns.style.display = "flex";

    form_5_progessbar.classList.remove("active");
    form_5("none");
});

form_5_next_btn.addEventListener("click", function(){
    form_5.style.display = "none";
    form_6.style.display = "block";

    form_6_btns.style.display = "flex";
    form_5_btns.style.display = "none";

    form_6_progessbar.classList.add("active");
});

form_6_back_btn.addEventListener("click", function(){
    form_5.style.display = "block";
    form_6.style.display = "none";

    form_6_btns.style.display = "none";
    form_5_btns.style.display = "flex";

    form_6_progessbar.classList.remove("active");

    form_5("none");
});
function form_5(display) {
    var form_5 = document.querySelector(".form_5");
    if (form_5) {
        form_5.style.display = display;
    }
}
btn_done.addEventListener("click", function(){
    modal_wrapper.classList.add("active");
});

shadow.addEventListener("click", function(){
    modal_wrapper.classList.remove("active");
});

// Additional event listeners for progress bar clicks

// Additional event listener for the final form back button
form_6_back_btn.addEventListener("click", function(){
    form_5.style.display = "block";
    form_6.style.display = "none";

    form_6_btns.style.display = "none";
    form_5_btns.style.display = "flex";

    form_6_progessbar.classList.remove("active");
});

function attachValidationHandlers(input, message) {
    input.addEventListener('input', function() {
      validateInput(this, message);
    });

    input.addEventListener('blur', function() {
      validateInput(this, message);
    });
  }

  function printDetails() {
    document.getElementById('adviser').innerText = prompt('Enter Adviser\'s Name:');
    document.getElementById('principal').innerText = prompt('Enter Principal\'s Name:');
    window.print();

  }