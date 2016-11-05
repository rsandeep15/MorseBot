/**
 * Created by ToasT on 11/5/2016.
 */

(function () {
    // add click listener for button
    $('#translate-button')
        .on('click', function (e) {
            e.preventDefault();
            console.log("hello?");
            var input = $('#englishField');
            var content = input.val();

            // add text to translated text container
            $('#messages')
                .append(content);

            // remove text in input field
            input.val('');
        });
}());