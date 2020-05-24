const db = require('../config/db.config.js');
const Users = db.users;
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');
 
exports.create =  (req, res) => { 
  let salt =  bcrypt.genSaltSync(10)
  let hashPassword =  bcrypt.hashSync(req.body.password, salt);
  
  Users.create({  
    fullName: req.body.fullName,
    email: req.body.email,
    password: hashPassword
  }).then(user => {    
    res.send(user);
  });
};


exports.findAll = (req, res) => {
  Users.findAll().then(user => {
    res.send(user);
  });
};
 

exports.findById = (req, res) => {  
  console.log(req.body)
  Users.findByPk(req.params.userId).then(user => {
    res.send(user);
  })
};

exports.login =  (req, res) => {
  Users.findOne({where: req.params}).then(user => {
    try{
      let validPass =  bcrypt.compareSync(req.body.password, user.password)                           
      if(!validPass) return res.status(400).send("Invalid Password")
       
      let token = jwt.sign({user}, "secretWord")
      res.send({user, token});
    }catch(err){
      if(err) return res.status(400).send(console.error(err))
    }
});
};

exports.findByEmail = (req, res) => {  
  Users.findByPk(req.params.userEmail).then(user => {
    res.send(user);
})
};


exports.update = (req, res) => {
  const id = req.params.userId;
  Users.update( { fullName: req.body.fullName,  
                  email: req.body.email, 
                  password: req.body.password }, { where: {id: req.params.userId} })
       .then(() => {
          res.status(200).send("updated successfully a user with id = " + id);
       });
};
 

exports.delete = (req, res) => {
  const id = req.params.userId;
  Users.destroy({
    where: { id: id }
  }).then(() => {
    res.status(200).send('deleted successfully a user with id = ' + id);
  });
};