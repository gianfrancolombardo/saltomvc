/**
 * Copyright 2014 Gianfranco Lombardo. All Rights Reserved.
 *
 * lib/templates/routes
 * routes.js
 */

var ctl_{{ENTITY}} = require ('../controllers/ctl_{{ENTITY}}');

module.exports = function (app) {
    app.get('/{{ENTITY}}', ctl_{{ENTITY}}.index);

    app.get('/{{ENTITY}}/new', ctl_{{ENTITY}}.new{{ENTITY}});

    app.get('/{{ENTITY}}/edit/:id', ctl_{{ENTITY}}.edit{{ENTITY}});

    app.post('/{{ENTITY}}/save', ctl_{{ENTITY}}.save{{ENTITY}});

    app.get('/{{ENTITY}}/delete/:id', ctl_{{ENTITY}}.delete{{ENTITY}});

}
