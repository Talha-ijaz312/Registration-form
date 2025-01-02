// // $(document).ready(function () {
// //       $('#btn').click(function () {
// //         const a = $('#fname').val();
// //         const b = $('#lname').val();
// //         const c = $('#email').val();
// //         const d = $('#number').val();
// //         const e = $('#password').val();


// //         const allval = `First Name: ${a} <br>Last Name:${b} <br> Email: ${c} <br> Phone Number: ${d} <br> Password: ${e}`
// //         $('#p1').html(allval);

// //      });
// //     $('#form').validate({
// //         rules: {
// //             fname: {
// //                 required: true,
// //                 minlength: 3
// //             },
// //             lname: {
// //                 required: true,
// //                 minlength: 3
// //             },

// //             email: {
// //                 required: true,
// //                 email: true
// //             },
// //             number: {

// //                 required: true,
// //                 digits: true,
// //                 minlength: 11,
// //                 maxlength: 10

// //             },
// //             password: {
// //                 required: true,
// //                 minlength: 5,


// //             }
// //         },
// //         message:{
// //             fname: {
// //                 required: "Please Enter first name",
// //                 minlength: "Minimum 3 character"
// //             },
// //             lname: {
// //                 required: "Please Enter first name",
// //                 minlength: "Minimum 3 lcharacter"
// //             },
// //             email: {
// //                 required: "Enter provide email",
// //                 email: "Enter valid email"
// //             },
// //             number: {

// //                 required: "Enter number",
// //                 digits: "Enter Valid number",
// //                 minlength: "Minimum 11 length",
// //                 maxlength: "maximum 15 length"

// //             },
// //             password: {
// //                 required: "Enter password",
// //                 minlength: "Minimum 5 character",

// //             }
// //         },

// //     });
// //    });
$(document).ready(function () {
    // Validate the form
    $('#form').validate({
        rules: {
            fname: {
                required: true,
                minlength: 3,
                // pattern: /^[a-zA-Z0-9]+$/
            },
            lname: {
                required: true,
                minlength: 3
            },
            email: {
                required: true,
                email: true
            },
            number: {
                required: true,
                digits: true,
                minlength: 10,
                maxlength: 15
            },
            password: {
                required: true,
                minlength: 5
            }
        },
        messages: {
            fname: {
                required: "Please enter your first name",
                minlength: "First name must be at least 3 characters",
                pattern: "Only alphabet"

            },
            lname: {
                required: "Please enter your last name",
                minlength: "Last name must be at least 3 characters"
            },
            email: {
                required: "Please provide your email",
                email: "Please enter a valid email address"
            },
            number: {
                required: "Please provide your phone number",
                digits: "Phone number must contain only digits",
                minlength: "Phone number must be at least 10 digits",
                maxlength: "Phone number cannot exceed 15 digits"
            },
            password: {
                required: "Please enter a password",
                minlength: "Password must be at least 5 characters"
            }
        },
    })
 });
        // submitHandler: function (form) {

     $('#btn1').click(function () {

        //  })

        const a = $('#fname').val();
        const b = $('#lname').val();
        const c = $('#email').val();
        const d = $('#number').val();
        const e = $('#password').val();

        const allval = `First Name: ${a} <br> Last Name: ${b} <br> Email: ${c} <br> Phone Number: ${d} <br> Password: ${e}`;
        $('#p1').html(allval);
    
    // })
    //  });

    // Button click handler
    //   $('#btn1').click(function () {
        // $('#form').submit(); // Trigger form submission
      
 });

//    }):