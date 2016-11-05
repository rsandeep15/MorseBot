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
                    case 'a': translated += '.-,'; break;
                    case 'b': translated += '-...,'; break;
                    case 'c': translated += '-.-.,'; break;
                    case 'd': translated += '-..,'; break;
                    case 'e': translated += '-,'; break;
                    case 'f': translated += '--.-,'; break;
                    case 'g': translated += '--.,'; break;
                    case 'h': translated += '....,'; break;
                    case 'i': translated += '..,'; break;
                    case 'j': translated += '.---,'; break;
                    case 'k': translated += '-.-,'; break;
                    case 'l': translated += '.-..,'; break;
                    case 'm': translated += '--,'; break;
                    case 'n': translated += '-.,'; break;
                    case 'o': translated += '---,'; break;
                    case 'p': translated += '.--.,'; break;
                    case 'q': translated += '--.-,'; break;
                    case 'r': translated += '.-.,'; break;
                    case 's': translated += '---,'; break;
                    case 't': translated += '-,'; break;
                    case 'u': translated += '..-,'; break;
                    case 'v': translated += '...-,'; break;
                    case 'w': translated += '.--,'; break;
                    case 'x': translated += '-..-,'; break;
                    case 'y': translated += '-.--,'; break;
                    case 'z': translated += '--..,'; break;
                    case '1': translated += '.----,'; break;
                    case '2': translated += '..---,'; break;
                    case '3': translated += '...--,'; break;
                    case '4': translated += '....-,'; break;
                    case '5': translated += '.....,'; break;
                    case '6': translated += '-....,'; break;
                    case '7': translated += '--...,'; break;
                    case '8': translated += '---..,'; break;
                    case '9': translated += '----.,'; break;
                    case '0': translated += '-----,'; break;
                    case ' ': translated += ' / '; break;
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
