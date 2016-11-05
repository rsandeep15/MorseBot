/**
 * Created by ToasT on 11/5/2016.
 */

(function () {
    // add click listener for button
    $('#translate-button')
        .on('click', function (e) {
            e.preventDefault();
            var input = $('#englishField');
            var textArea = $('#messages');
            var content = input.val();
            var translated = '';
            var chars = content.toLowerCase().split('');
            var length = chars.length;
            for (var i=0; i<length; i++) {
                switch (chars[i]) {
                    case 'a': translated += '01'; break;
                    case 'b': translated += '1000'; break;
                    case 'c': translated += '1010'; break;
                    case 'd': translated += '100'; break;
                    case 'e': translated += '1'; break;
                    case 'f': translated += '1101'; break;
                    case 'g': translated += '110'; break;
                    case 'h': translated += '0000'; break;
                    case 'i': translated += '00'; break;
                    case 'j': translated += '0111'; break;
                    case 'k': translated += '101'; break;
                    case 'l': translated += '0100'; break;
                    case 'm': translated += '11'; break;
                    case 'n': translated += '10'; break;
                    case 'o': translated += '111'; break;
                    case 'p': translated += '0110'; break;
                    case 'q': translated += '1101'; break;
                    case 'r': translated += '010'; break;
                    case 's': translated += '111'; break;
                    case 't': translated += '1'; break;
                    case 'u': translated += '001'; break;
                    case 'v': translated += '0001'; break;
                    case 'w': translated += '011'; break;
                    case 'x': translated += '1001'; break;
                    case 'y': translated += '1011'; break;
                    case '1': translated += '01111'; break;
                    case '2': translated += '00111'; break;
                    case '3': translated += '00011'; break;
                    case '4': translated += '00001'; break;
                    case '5': translated += '00000'; break;
                    case '6': translated += '10000'; break;
                    case '7': translated += '11000'; break;
                    case '8': translated += '11100'; break;
                    case '9': translated += '11110'; break;
                    case '0': translated += '11111'; break;
                    case ' ': translated += ' '; break;
                    default : console.log(chars[i]);
                }
            }
            console.log(translated);

            // add text to translated text container
            textArea.val(translated);

            // remove text in input field
            input.val('');
        });
}());