/**
 * Copyright 2014 Gianfranco Lombardo. All Rights Reserved.
 *
 * /main
 * main.js
 */

(function () {
    var core = require('./lib/saltomvc');

    process.argv.forEach(function (val, index, array) {
        if (index >= 2)
            core.index(process.argv[index]);
    });
}).call(this);

