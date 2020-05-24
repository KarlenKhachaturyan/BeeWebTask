module.exports = function(app) {
 
    const users = require('../controller/users.controller');
 
    app.post('/api/user', users.create);
 
    app.get('/api/users', users.findAll);
 
    app.post('/api/users/login', users.login)
    
    app.get('/api/user/:userId', users.findById);
 
    app.get('/api/user/:userEmail', users.findByEmail);

    app.put('/api/user/:userId', users.update);
    
    app.delete('/api/user/:userId', users.delete);
}