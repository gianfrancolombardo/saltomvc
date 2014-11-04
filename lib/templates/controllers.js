/**
 * Copyright 2014 Gianfranco Lombardo. All Rights Reserved.
 *
 * lib/templates/controllers
 * controllers.js
 */


var models = require('../models/model');

module.exports.index = function (req, res) {
    models.{{ENTITY}}.findAll().success(function (xitems) {
        res.render('{{ENTITY}}/index', {
            title: 'Index', items: xitems
        });
    });
}

module.exports.new{{ENTITY}} = function (req, res) {
    res.render('{{ENTITY}}/form', { title: 'New' });
}

module.exports.edit{{ENTITY}} = function (req, res) {
    var xid = req.param('id');
    models.{{ENTITY}}.find({where: {id: xid}}).success(function (xitem) {
        res.render('{{ENTITY}}/form', { title: 'Edit', item: xitem });
    })
}

module.exports.save{{ENTITY}} = function (req, res) {
    var xid = req.param('txt-id');
    // ----------------------------*
    // Here are the captured post  *
    // var xname = req.param('txt-name');

    if (xid == null) {
        models.{{ENTITY}}.create({
            // ----------------------------*
            // Here are the attributes     *
            // name: xname
        }).success(function () {
            console.log('{{ENTITY}} created successfully.');
            res.redirect('/{{ENTITY}}/');
        });
    } else {
        models.{{ENTITY}}.find({where: {id: xid}}).success(function (xitem) {
            // ----------------------------*
            // Here are the attributes     *
            // xitem.name = xname;
            xitem.save().success(function () {
                console.log('{{ENTITY}} successfully saved.');
                res.redirect('/{{ENTITY}}/');
            });
        })
    }
}

module.exports.delete{{ENTITY}} = function (req, res) {
    var xid = req.param('id');
    models.{{ENTITY}}.destroy({where: {id: xid}}).success(function () {
        console.log('{{ENTITY}} successfully removed.');
        res.redirect('/{{ENTITY}}/');
    });
}
