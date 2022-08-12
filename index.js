//NAV RESPONSIVE HIDE

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}


//CONTACT FORM

$('form')[0].reset();
$("#name").focus();

const $submitButton = $('button');
const $buttonErrorSpan = $('<span class="buttonError">Please fix errors above before submitting form.</span>');
$submitButton.after($buttonErrorSpan);
$buttonErrorSpan.hide();
const $nameInput = $('#name');
const $telInput = $('#tel')
const $mobileInput = $('#mobile')
const $nameSpan = $('<span class="nameError">Please enter only alphabetic characters.</span>');
const $telSpan = $('<span class="nameError">Please enter a valid phone number.</span>');
const $mobileSpan = $('<span class="nameError">Please enter a valid mobile number.</span>');
$nameInput.after($nameSpan);
$telInput.after($telSpan);
$mobileInput.after($mobileSpan);
$nameSpan.hide();
$telSpan.hide();
$mobileSpan.hide();
const $nameSpan2 = $('<span class="nameError">Please enter a name.</span>');
const $telSpan2 = $('<span class="nameError">Please enter a phone number.</span>');
const $mobileSpan2 = $('<span class="nameError">Please enter a mobile number.</span>');
$nameInput.after($nameSpan2);
$telInput.after($telSpan2);
$mobileInput.after($mobileSpan2);
const $mailInput = $('#mail');
const $mailSpan = $('<span class="mailError">Please enter a valid email address.</span>');
$mailInput.after($mailSpan);

//*****NAME INPUT VALIDATION
$nameInput.keyup( () => {
  const $nameVal = $nameInput.val();
  const $nameRegex = /^[a-zA-Z]+(\s[a-zA-Z]+)?(\s)?$/i;
  if ($nameVal != "") {
    $nameSpan2.hide();
    if (!$nameVal.match($nameRegex)) {
      $nameSpan.show();
    } else {
      $nameSpan.hide();
    }
  } else {
    $nameSpan.hide();
    $nameSpan2.show();
  }
});

//*****MAIL INPUT VALIDATION
$mailInput.keyup( () => {
  const $mailVal = $mailInput.val();
  const $mailRegex = /^[^@]+@[^@.]+\.[a-z]+$/i;
  if (!$mailVal.match($mailRegex)) {
    $mailSpan.show();
  } else {
    $mailSpan.hide();
  }
});

//*****PHONE INPUT VALIDATION
$telInput.keyup( () => {
const $telVal = $telInput.val();
const $telRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
if ($telVal != "") {
    $telSpan2.hide();
    if (!$telVal.match($telRegex)) {
    $telSpan.show();
    } else {
    $telSpan.hide();
    }
} else {
    $telSpan.hide();
    $telSpan2.show();
}
});

//*****MOBILE INPUT VALIDATION
$mobileInput.keyup( () => {
const $mobileVal = $mobileInput.val();
const $mobileRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
if ($mobileVal != "") {
    $mobileSpan2.hide();
    if (!$mobileVal.match($mobileRegex)) {
    $mobileSpan.show();
    } else {
    $mobileSpan.hide();
    }
} else {
    $mobileSpan.hide();
    $mobileSpan2.show();
}
});

//*****BUTTON VALIDATION
$submitButton.on('click', e => {
    const $nameVal = $nameInput.val();
    const $nameRegex = /^[a-zA-Z]+(\s[a-zA-Z]+)?(\s)?$/i;
    const $telVal = $telInput.val();
    const $telRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    const $mobileVal = $mobileInput.val();
    const $mobileRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    const $mailVal = $mailInput.val();
    const $mailRegex = /^[^@]+@[^@.]+\.[a-z]+$/i;
    
    if ($nameVal == "" || !$nameVal.match($nameRegex)) {
      e.preventDefault();
      $buttonErrorSpan.show();
    } else {
      $buttonErrorSpan.hide();
    }
    if ($telVal == "" || !$telVal.match($telRegex)) {
        e.preventDefault();
        $buttonErrorSpan.show();
      } else {
        $buttonErrorSpan.hide();
      }
    if ($mobileVal == "" || !$mobileVal.match($mobileRegex)) {
        e.preventDefault();
        $buttonErrorSpan.show();
        } else {
        $buttonErrorSpan.hide();
        }
    if (!$mailVal.match($mailRegex)) {
      e.preventDefault();
      $buttonErrorSpan.show();
    } else {
      $buttonErrorSpan.hide();
    }
});