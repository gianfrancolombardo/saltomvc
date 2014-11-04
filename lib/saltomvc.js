/**
 * Copyright 2014 Gianfranco Lombardo. All Rights Reserved.
 *
 * lib/saltomvc
 * saltomvc
 */


var fs = require('fs');
var path = require('path');

copyAndReplaceEntity = function (xentity, xtype, xdestination) {
    var err = false;
    var pathOrigin = './node_modules/saltomvc/lib/templates/' + xtype + '.js';
    var pathDestination = './' + xtype + '/' + xdestination;

    // Check if exist template file in templates folder
    if (!fs.existsSync(pathOrigin)) {
        console.error('ERR: file template not exist: ' + pathOrigin);
        return false;
    }

    // Check if exist file generated in destination
    if (fs.existsSync(xdestination))
        fs.unlink(xdestination);

    // Read a file template
    fs.readFile(pathOrigin, 'utf8', function (err, data) {
        if (err) return console.log(err);

        // Replace var for entity
        var result = data.replace(/{{ENTITY}}/g, xentity);

        // Generate file
        fs.writeFile(pathDestination, result, 'utf8', function (err) {
            if (err) return console.log(err);
            console.log('File ' + xtype + ' successfully created: ' + xentity);
        });
    });
}

copyFile = function(xoigin, xdestination){
    if (!fs.existsSync(xoigin))
        console.error('ERR: file template not exist: ' + xoigin);
    else {
        if (!fs.existsSync(xdestination)) {
            fs.readFile(xoigin, 'utf8', function (err, data) {
                if (err) return console.log(err);
                fs.writeFile(xdestination, data, 'utf8', function (err) {
                    if (err) return console.log(err);
                    console.log('File successfully created: ' + xdestination);
                });
            });
        }
    }
}

module.exports.index = function (xentity) {

    // Set name of files
    var folders = ['controllers', 'models', 'routes'];
    var files = ['ctl_' + xentity + '.js',
        'mdl_' + xentity + '.js',
        'rot_' + xentity + '.js'];

    // Create folders
    folders.forEach(function (folder, index) {
        try {
            fs.mkdirSync('./' + folder);
            console.log('Folder successfully created: ' + folder);
        } catch (e) {
            if (e.code !== 'EEXIST')
                console.error('ERR: ' + e);
        }


        // Create controller
        var result = copyAndReplaceEntity(xentity, folder, files[index]);
        if (!result) return;
    });

    // Copy confi.json
    var pathOrigin = './node_modules/saltomvc/lib/files/';
    var filename = 'config.json';
    var pathDestination = './';
    copyFile(pathOrigin + filename, pathDestination + filename);

    // Copy model.js
    filename = 'model.js';
    pathDestination = './models/';
    copyFile(pathOrigin + filename, pathDestination + filename);
}

