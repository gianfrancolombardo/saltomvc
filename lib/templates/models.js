/**
 * Copyright 2014 Gianfranco Lombardo. All Rights Reserved.
 *
 * lib/templates/models
 * models.js
 */

var mongoose = require('mongoose')
      ,Schema = mongoose.Schema
      {{ENTITY}}Schema = new Schema( {
          // ----------------------
          // Aqui van los atributos
      }),
mdl_{{ENTITY}} = mongoose.model('{{ENTITY}}', {{ENTITY}}Schema);

module.exports = mdl_{{ENTITY}};