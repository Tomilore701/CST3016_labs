
$(document).ready(function () {
    // Map each dice number to the dots that should be visible
    const diceDots = {
        1: [3], // Center dot
        2: [1, 5], // Two diagonal corners
        3: [1, 3, 5], // Two corners and center
        4: [1, 2, 4, 5], // Four corners
        5: [1, 2, 3, 4, 5], // Four corners and center
        6: [1, 2, 4, 5, 6, 7] // All six dots
    };

    
    $('#roll-dice-button').click(function () {
        let randomNumber = Math.floor(Math.random() * 6) + 1;

       
        $('.dot').hide();

        diceDots[randomNumber].forEach(dotIndex => {
            $('.dot').eq(dotIndex - 1).show();
        });
    });

    
    $('.dot').hide();
    diceDots[6].forEach(dotIndex => {
        $('.dot').eq(dotIndex - 1).show();
    });
});
