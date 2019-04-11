var elUsername = document.getElementById('username');   // Username input
var elMsg      = document.getElementById('feedback');   // Error msg element

function checkUsername(minLength) {                     // Declare function
    if (elUsername.value.length < minLength) {            // If username too short
        // Set the error message
        elMsg.innerHTML = 'Username must be ' + minLength + ' characters or more';
    } else {                                             // Otherwise
        elMsg.innerHTML = '';
        console.log('debug');
        localStorage.setItem('username', elUsername.value);
    }

}

elUsername.addEventListener('blur', function() {        // När den tappar fokus
    checkUsername(5);                                     // Argumentet körs här
}, false);



    var txtYourname = document.getElementById('yourname'); // Skapar formulär element
    var txtWishlist = document.getElementById('wishlist');

    txtYourname.value = localStorage.getItem('yourname');  //Namn och önskelista sparas i local storage
    txtWishlist.value = localStorage.getItem('wishlist');

    txtYourname.addEventListener('input', function () {    // Data sparas på keyup
        console.log("Debug input");
        localStorage.setItem('yourname', txtYourname.value);
    }, false);

    txtWishlist.addEventListener('input', function () {      // Data sparas på keyup
        localStorage.setItem('wishlist', txtWishlist.value);
    }, false);
