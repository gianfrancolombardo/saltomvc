var mongoose = require('mongoose')
      ,Schema = mongoose.Schema
      {{ENTITY}}Schema = new Schema( {
          // ----------------------
          // Aqui van los atributos
      }),
mdl_{{ENTITY}} = mongoose.model('{{ENTITY}}', {{ENTITY}}Schema);

module.exports = mdl_{{ENTITY}};