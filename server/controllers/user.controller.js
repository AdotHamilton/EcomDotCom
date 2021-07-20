const { User } = require('../models/user.model');
const bcrypt = require("bcrypt");
const e = require('express');
module.exports = {
    getUser: (req, res) => {
        User.findOne({_id: req.params.id})
            .then(data => res.json({results: data}))
            .catch(err => res.json(err.errors))
    },
    deleteUser: (req, res, id) => {
        User.findOneAndDelete({_id: id})
            .then(deletedUser => res.json(deletedUser))
            .catch(err => res.json(err));
    },
    updateUser: async (req, res) => {
        let { body } = req;
        if(body["password"] && body["password"] == body["confirmPassword"]) {
            const hash = await bcrypt.hash(body["password"], 10)
            if(hash){
                body["password"] = hash;
                console.log(body);  
                User.findByIdAndUpdate(req.params.id, {$set: body}, (user, error) => {
                    if(error){
                        res.status(400)
                        res.json({errors: error})
                    } else {
                        res.json({updatedUser: user})
                    }
                });
            }
        } 
    }
}

