const db = require('../db');

//  home
module.exports.index = function (req, res) {
    const users = db.get('users').value();
    res.render('users', {
      users: users
    });
};

// add
module.exports.create = function (req, res) {
    res.render('addusers');
}

module.exports.addUser = function (req, res) {
    const ID = function () {
    return Math.random();
    };

    const queryParamUser = req.query;
    queryParamUser.id = ID();
    console.log(queryParamUser);
    if(queryParamUser.name != '') {
    db.get('users').push(queryParamUser).write();
    res.redirect('/users');
    }
}

// update
module.exports.update = function (req, res){
    res.render('updateusers', {
    id: req.params
    });
}

module.exports.updateUser = function (req, res){
    const id = parseFloat(req.params.id);
    const book = db.get('users').find({id: id}).assign({name: req.query.name}).write();
    res.redirect('/users');
}

// delete
module.exports.delete = function (req, res) {
    const id = parseFloat(req.params.id);
    const user = db.get('users').remove({id: id}).write();
    res.redirect('/users');
}

// view
module.exports.view = function (req, res) {
    const id = parseFloat(req.params.id);
    const user = db.get('users').find({id: id}).value();
    res.render('viewuser', {
    names: user
    });
}