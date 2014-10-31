/**
 * Copyright 2014 Gianfranco Lombardo. All Rights Reserved.
 *
 * lib/templates/routes
 * routes.js
 */

var ctl_{{ENTITY}} = require ('../controllers/{{ENTITY}}');

module.exports = function (app) {
    app.get('/', ctl_{{ENTITY}}.index);

    app.get('/new', ctl_{{ENTITY}}.new{{ENTITY}});

    app.get('/edit', ctl_{{ENTITY}}.edit{{ENTITY}});

    app.get('/save', ctl_{{ENTITY}}.save{{ENTITY}});

    app.get('/delete', ctl_{{ENTITY}}.delete{{ENTITY}});

    app.get('/list', ctl_{{ENTITY}}.list{{ENTITY}});
        
}