module.exports = (sequelize, Sequelize) => {
    const Workspace = sequelize.define('workspaces', {
    userId: {
      type: Sequelize.INTEGER
      },
      name: {
      type: Sequelize.STRING
      },
      subDomain: {
        type: Sequelize.STRING
      }
    });
    
    return Workspace;
}