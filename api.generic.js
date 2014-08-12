function initRoutes(app, MongooseModel, urlBase) {

    var url = '/api/' + urlBase;
    
    var log = function (str, obj) {
        str = '[api.generic.js] ' + url + ' ' + str;
        if (obj) console.log(str, obj);
        else console.log(str);
    }

    // GET all
    app.get(url, function(req, res, next) {
        log('GET all');
        
        var params = req.query;
        params.deleted = false;
        
        console.log(params);
        
        MongooseModel.find(params, // not deleted
            
            // on complete...
            function (err, records) {
                if (err) return next(err);
                res.send(records);
        });
    });
    
    // GET one
    app.get(url + '/:id', function(req, res, next) {
        log(url + ' GET one');
        
        MongooseModel.findById(req.params.id, function(err, found) {
            if (err) return next(err);
            res.send(found);
        });
    });

    // POST save new 
    app.post(url, function(req, res, next) {
        log(url + ' POST save new');
        
        req.body.deleted = false;   // add the deleted flag
        console.log(req.body);
        
        var record = MongooseModel.create(req.body, 
                               
           function (err, record, numAffected) {
                if (err) return next(err);
                res.send(200);
            }
        );
    });
    
    // UPDATE one record
    app.post(url + '/:id', function(req, res, next) {
        log(url + ' POST w/ id, update record');
        
        console.log(req.body);
        
        MongooseModel.update({ _id: req.params.id }, { $set: req.body }, function (err, doc) {
            if (err) return next(err);
            res.send(200);
        });
    });

    // DELETE one record
    app.delete(url + '/:id', function(req, res, next) {
        log(' DELETE one record');
        log('req.params:', req.params);
        
        MongooseModel.findById(req.params.id, function (err, record) {
            
            // not truly deleting, just setting deleted flag
            record.deleted = true;
            record.save(err);
            
            if (err) return next(err);
            res.send(200);
        });
    });

}

module.exports.initRoutes = initRoutes;