/**
 * Copyright 2014 Gianfranco Lombardo. All Rights Reserved.
 *
 * /main
 * main.js
 */

(function () {
    var core = require('./lib/saltomvc');

    if (process.argv.length < 3)
        console.log("Has not added any entity to generate");

    process.argv.forEach(function (val, index, array) {
        if (index >= 2) {
            console.log('*** Generating for: ' + process.argv[index] + ' ***');
            core.index(process.argv[index]);
        }
    });
}).call(this);

