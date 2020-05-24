module.exports = function(app) {
 
    const workspace = require('../controller/workspaces.controller');
 
    app.post('/api/workspace', workspace.create);
 
    app.get('/api/workspaces', workspace.findAll);

    app.get('/api/workspaces/checksubdomain/:subDomain', workspace.checksubdomain);

    app.get('/api/workspaces/:workspaceId', workspace.findById);

    app.put('/api/workspaces/:workspaceId', workspace.update);
    
    app.delete('/api/workspaces/:workspaceId', workspace.delete);
}