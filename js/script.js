document.querySelector('button').addEventListener('click', function() {
    // Gets the value of the input with the id #subjects
    let values = document.querySelector('#subject').value
    
    // Checks if the input value length is equal to 3 or higher, else, you'll get an error message.
    if (values.length >= 3) {
        //Changes the form method to "post"
        document.querySelector("form").method = "post"
        // Changes the form action to "mailto:julian@alsemmani.no?subject=${values}"
        document.querySelector("form").action = `mailto:julian@alsemmani.no?subject=${values}`
        // Changes the Paragraph with the id #thanks to an success message.
        document.querySelector("#thanks").innerHTML = `Something will pop-up. Thanks for messaging me :) <br> If It didn't work. <a href="mailto:julian@alsemmani.no">Julian@Alsemmani.no</a>`
        // Makes the Paragraph visible.
        document.querySelector("#thanks").style.opacity = 1
    } else {
        document.querySelector("#thanks").innerHTML = "Please enter a valid Email Address."
        document.querySelector("#thanks").style.opacity = 1
    }
});
