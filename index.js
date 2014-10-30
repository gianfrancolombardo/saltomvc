(function () {
    var core = require('./lib/saltomvc');
//hola
    process.argv.forEach(function (val, index, array) {
        if (index >= 2)
            core.index(process.argv[index]);
    });
}).call(this);

