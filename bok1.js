const createReadStream = require('fs').createReadStream;//Denna läser ut
const createWriteStream = require('fs').createWriteStream; //den skriver ut
const csvjson = require('csvjson'); //Det är ett json bibliotek

const toObject = csvjson.stream.toObject();// är en Transform streams.
const stringify = csvjson.stream.stringify(); //är en Transform streams.

createReadStream('bok1.csv', 'utf-8')
    .pipe(toObject)
    .pipe(stringify)
    .pipe(createWriteStream('./jsonfil.json'));
// first one is helping us to parse the plain text, extracted from the source CSV while the next one stringify the result of the first one, so we can write/put it in the json output file
