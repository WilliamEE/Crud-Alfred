/**
 * ClientesController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

    get: function(req,res){
        Cliente.find()
            .then(function(Cliente){
                    if(!Cliente || Cliente.length === 0){
                        return res.send({
                            'succes': false,
                            'message': 'No se encontraron registros'
                        })
                        
                    }return res.send({
                        'succes': true,
                        'message': 'Se encontraron registros',
                        'data': Cliente
                    })})
                    .catch(function(err){
                    sails.log.debug(err);
                    return res.send({
                        'succes': false,
                        'message': 'Imposible obtener los registros'
                    })

                    })

            
    },
    find: function(req,res){
        Cliente.find(req.param())
            .then(function(Cliente){
                    return res.send({
                        'succes': true,
                        'message': 'Se encontraron coincidencias',
                        'data': Cliente
                    })})
                    .catch(function(err){
                    sails.log.debug(err);
                    return res.send({
                        'succes': false,
                        'message': 'Imposible obtener los registros'
                    })

                    })            
    },


    create: function(req,res){
        sails.log.debug(req.allParams())
    Cliente.create(req.allParams())
        .then(function(Cliente){
           return res.send({
            'succes': true,
            'message': 'Guardado con exito'
           }) 
        })
        .catch(function(err){
            sails.log.debug(err);
            return res.send({
                'succes': false,
                'message': 'No se pudo crear un cliente'
            })
        })  

    },
    update: function(req,res){
        sails.log.debug(req.param('id'))
        Cliente.update(req.param('id'),req.allParams())
            .then(function(cliente){
                return res.send({
                    'succes': true,
                    'message': 'actualizado con exito',          
                    'data': cliente
                })

            })
            .catch(function(err){
                sails.log.debug(err);
                return res.send({
                    'succes': false,
                    'message': 'No se pudo actualizar un cliente'
                })
            })
    },
    delete: function(req,res){
        sails.log.debug(req.param('id'))
        Cliente.destroy(req.param('id'))
            .then(function(cliente){
                return res.send({
                    'succes': true,
                    'message': 'Eliminado con exito',          
                    
                })

            })
            .catch(function(err){
                sails.log.debug(err);
                return res.send({
                    'succes': false,
                    'message': 'No se pudo eliminar un cliente'
                })
            })
    }
};

