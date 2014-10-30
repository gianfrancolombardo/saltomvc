var fs =  require('fs');
var path = require('path');

copyAndReplaceEntity = function (xentity, xtype, xdestination) {
    var pathOrigin = './lib/files_origin/' + xtype + '.js';
    var pathDestination = xtype +'/'+ xdestination;

    fs.exists(xdestination, function (exists) {
        if (exists) fs.unlink(xdestination);
    });

    fs.readFile(pathOrigin, 'utf8', function (err, data) {
        if (err) {
            return console.log(err);
        }
        var result = data.replace(/{{ENTITY}}/g, xentity);

        fs.writeFile(pathDestination, result, 'utf8', function (err) {
            if (err) return console.log(err);
            console.log('File ' + xtype + ' successfully created: ' + xentity);
        });
    });
}

module.exports.index = function (xentity) {

    // Set name of files -------------------*
    var folders = ['controllers', 'models', 'routes'];
    var files = ['ctl_' + xentity + '.js',
        'mdl_' + xentity + '.js',
        'rot_' + xentity + '.js'];

    //Create folders -----------------------*
    folders.forEach(function (folder, index) {
        fs.mkdir('./' + folder, function (e) {
            if (!e || (e && e.code === 'EEXIST'))
                console.log('Folder successfully created: ' + folder);
        });


        // Create controller -------------------*
        copyAndReplaceEntity(xentity, folder, files[index]);

    });
}

