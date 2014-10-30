var mongoose = require('mongoose');
var mdl_{{ENTITY}} = require('../models/mdl_{{ENTITY}}');

module.exports.index = function(req, res){
     res.render('{{ENTITY}}/index', { title: 'Index' });
}

module.exports.new{{ENTITY}} = function(req, res){
     res.render('{{ENTITY}}/new', { title: 'New' });
}

module.exports.edit{{ENTITY}} = function(req, res){
     res.render('{{ENTITY}}/edit', { title: 'Edit' });
}

module.exports.save{{ENTITY}} = function (req, res){
        var obj = new mdl_{{ENTITY}}({
             //-------------------------
             // Aqui van los atributos
             // Ej: name: 'Juan' 
        });
        obj.save(function (err, obj) {
            if (err) return console.error(err);
            console.log('{{ENTITY}} agregado correctamente.');
        });
        res.render('index', { title: 'Index' });
}

module.exports.delete{{ENTITY}} = function(req, res){
     res.render('{{ENTITY}}/delete', { title: 'Delete' });
}

module.exports.list{{ENTITY}} = function (req, res) {
        mdl_{{ENTITY}}.find(function (err, items) { 
         if (err) return console.error(err);
         console.log(items)
         res.render('{{ENTITY}}/list', { title: 'List', items: items });
        });   
    }