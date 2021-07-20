const {User} = require('../models/user.model');
const jwt = require("jsonwebtoken");
const bcrypt = require ('bcrypt');
    

module.exports = {
    register: (req,res) => {
        User.create(req.body)
            .then((user) => {
            res.cookie("usertoken", jwt.sign({ _id: user._id }, process.env.SECRET_KEY),
                    {
                        httpOnly: true,    
                    }
                )
                .json({msg: "success!" , user : {
                    userName : user.userName,
                }})
                
        })
        .catch((err) => res.json(err));
    },
    
    login: (req,res) => {
        User.findOne({email: req.body.email})
        .then( user => {
            if(user == null){
                res.status(400).json({msg: "Invalid login attempt!"})
                res.cookie()
            }
            else {
                bcrypt.compare(req.body.password, user.password)
                .then(isValid => {
                    if(isValid === true ){
                        res.cookie("usertoken", jwt.sign({_id: user._id}, process.env.SECRET_KEY),
                                {
                                    httpOnly: true,
                                }
                            )
                            .json({msg: "Success!", id: user._id });
                    }
                    else {
                        console.log('What the F!')
                        res.status(400).json({msg: "Invalid Login Attempt!"})
                    }
                })
                .catch(err => {
                    console.log(err)
                    res.status(400).json({msg: "Invalid login attempt!"})})
            }
        })
        .catch(err => res.status(400).json(err.errors));
    },

    logout: (req,res) => {
        res.clearCookie('usertoken');
        res.sendStatus(200);
    },
    
}