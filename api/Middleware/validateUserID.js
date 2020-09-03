// Model for the users
const Users = require('../Models/userModel.js')


module.exports = (req, res, next) => {

    const id  = req.params.id;
  
    Users.findById(id)
    .then(user => {
    if (user) {
      next();
  
    } else {res.status(404).json({errorMessage: "Invalid User Id" })}
    })
    .catch(error => {next(new Error('Could not validate this user ID (database error)'))
    })
}
