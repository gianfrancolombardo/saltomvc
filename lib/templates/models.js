/**
 * Copyright 2014 Gianfranco Lombardo. All Rights Reserved.
 *
 * lib/templates/models
 * models.js
 */

"use strict";
module.exports = function(sequelize, DataTypes) {
    var {{ENTITY}} = sequelize.define("{{ENTITY}}", {
        //-------------------------*
        // Here are the attributes *
        // name: DataTypes.STRING
    }, {
        classMethods: {
        }
    });

    return {{ENTITY}};
};