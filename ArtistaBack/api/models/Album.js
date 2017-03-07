/**
 * Album.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    idArtista:{
      // Model-> es el nombre de la tabla padre
      model: 'Artista',
      // Required es OPCIONAL si no queremos registros huerfanos
      required:true
    }
  }
};

