const db = require('../config/db.config.js');
const Workspace = db.workspaces;

const checkDomain = async (subDomain) => {
  return await Workspace.findOne({where: { subDomain }});
}

exports.create = (req, res) => { 
  Workspace.create({  
    userId: req.body.userId,
    name: req.body.name,
    subDomain: req.body.subDomain
  }).then(workspace => {    
    res.send(workspace);
  });
};

exports.findAll = (req, res) => {
  Workspace.findAll().then(workspaces => {
    res.send(workspaces);
  });
};
 
exports.findById = (req, res) => {  
  Workspace.findByPk(req.params.workspaceId).then(workspace => {
    res.send(workspace);
  })
};

exports.checksubdomain = async (req, res) => {
  const { subDomain } = req.params;
  console.log(subDomain,'subDomain')
  const cantUse = await checkDomain(subDomain);

  if (cantUse) {
    const subdomains = [];
    let count = 0;

    while (subdomains.length !== 3) {
      const newSD = await checkDomain(`${subDomain}${count}`);
      if (!newSD) {
        subdomains.push(`${subDomain}${count}`);
      }
      count++;
    }

    res.json({
      subdomains,
      canUse: false,
    })   
    return; 
  }

  res.json({
    canUse: !cantUse,
  })
};

exports.update = (req, res) => {
  const id = req.params.workspaceId;
  Workspace.update( { userId: req.body.userId, 
                      name: req.body.name,  
                      subDomain: req.body.subDomain}, { where: {id: req.params.workspaceId}})
           .then(() => {
              res.status(200).send("updated successfully a Workspace with id = " + id);
           });
};
 
exports.delete = (req, res) => {
  const id = req.params.workspaceId;
  Workspace.destroy({
    where: { id: id }
  }).then(() => {
    res.status(200).send('deleted successfully a Workspace with id = ' + id);
  });
};