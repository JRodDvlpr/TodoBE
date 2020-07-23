// enter the model for the users
const Users = require('../Models/user-Model.js')

// enter the models for the todo items and



const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url} ${Date.now()}`);
    next();
};


// const validateUserId = (req, res, next) => {
//     // do your magic!
//     const { id } = req.params;
  
//     Users.findById(id)
//     .then(user => {
//     if (user) {
//       next();
  
//     } else {res.status(400).json({errorMessage: "Invalid User Id" })}
//     })
//     .catch(error => {next(new Error('Could not validate this user ID (database error)'))
//     })
// }

// const validateTodo = (req, res, next) => {

//     if(req.body) {
//         if (req.body.text) {
//             next();
//         } else {
//             res.status(400).json({ Error: "Missing Required Text Field" })
//         }
//     } else {
//         res.status(500).json({ Error: "Cannot Connect to database"})
//     }
// }

 

module.exports = {
    logger
    
}