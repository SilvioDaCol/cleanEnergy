const controllerPostos = require('../controllers/postosController');

module.exports = {
    
    /******* CHARGESTATIONS *******/
    rotaCriaPosto: function (app){
        app.post('/chargeStation', function(req, res){
            const body = req.body;
            controllerPostos.postoSalvar(app, req, res);
            // res.send({'message' : body});
        });
    },
    rotaListaPostos: function (app){
        app.get('/chargeStation', function(req, res){
            controllerPostos.postosListar(app, req, res);
            // res.send('rotaListaPostos');
        });
    },
    rotaPostosDestaque: function (app){
        app.get('/chargeStation/highlights', function(req, res){
            res.send('rotaPostosDestaque');
        });
    },
    rotaPostoDetalhes: function (app){
        app.get('/chargeStation/:id', function(req, res){
            controllerPostos.postoDetalhes(app, req, res);
            // res.send('rotaPostoDetalhes');
        });
    },
    rotaEditaPosto: function (app){
        app.put('/chargeStation/:id', function(req, res){
            controllerPostos.updatePosto(app, req, res);
            // res.send('rotaEditaPosto');
        });
    },
    rotaDeletePosto: function (app){
        app.delete('/chargeStation/:id', function(req, res){
            controllerPostos.deletePosto(app, req, res);
            // res.send('rotaDeletePosto');
        });
    },

    /******* CHARGESTATIONS FEEDBACKS*******/
    rotaListaFeedbacks: function (app){
        app.get('/feedbacks/:chargeStationId', function(req, res){
            res.send('rotaListaFeedbacks');
        });
    },
    rotaCriaFeedback: function (app){
        app.post('/feedbacks', function(req, res){
            const body = req.body;
            res.send({'message' : body});
        });
    }
}