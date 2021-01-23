module.exports = {
    getPostos: function(connection, callback){
        let sql = 'select * from chargeStation;';
        connection.query(sql, callback);
    },
    postPosto: function(posto, connection, callback){
        let sql = 'insert into chargeStation set ?;';
        connection.query(sql, posto, callback);
    },
    getPosto: function(idposto, connection, callback){
        let sql = 'select * from chargeStation where idposto = ?;';
        connection.query(sql, idposto, callback);
    },
    updatePosto: function(posto, idposto, connection, callback){
        let sql = 'update chargeStation set ? where idposto = ?;';
        connection.query(sql, [posto, idposto], callback);
    },
    deletePosto: function(idposto, connection, callback){
        let sql = 'delete from chargeStation where idposto = ?;';
        connection.query(sql, idposto, callback);
    },

    /* FEEDBACKS */
    createFeedback: function(idposto, connection, callback){
        let sql = 'insert into feedback (idposto) values (?);';
        connection.query(sql, idposto, callback);
    },
    getFeedback: function(idposto, connection, callback){
        let sql = 'select * from feedback where idposto = ?;';
        connection.query(sql, idposto, callback);
    },
    postFeedback: function(feedback, connection, callback){
        let sql = 'update feedback set ? where idposto = ?;';
        connection.query(sql, [feedback, feedback.idposto], callback);
    },
    calcFeedback: function(feedback, connection){
        mean = feedback.star1 * 1 + feedback.star2 * 2 + feedback.star3 * 3 + feedback.star4 * 4 + feedback.star5 * 5; 
        mean = Math.round(mean/(feedback.star1 + feedback.star2 + feedback.star3 + feedback.star4 + feedback.star5));
        let sql = 'update chargeStation set meanstars = ? where idposto = ?;';
        connection.query(sql, [mean, feedback.idposto], function(err, result){
        });
    },
}