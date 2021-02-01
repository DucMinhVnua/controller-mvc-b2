const db = require('../db');
module.exports.index = function (req, res){
    const transactions = db.get('transactions').value();
    res.render('transaction', {
        transactions: transactions
    });
}

module.exports.indexPost =  function (req, res){
}

// create
module.exports.create = function (req, res){
    const users = db.get('users').value();
    const books = db.get('books').value();

    res.render('createTransaction', {
      users: users,
      books: books
    });
}

module.exports.createPost = function (req, res){
    const user = db.get('users').find({name: req.body.user}).value();
    const book = db.get('books').find({title: req.body.book}).value();
    const transactions = db.get('transactions').value()
    const ID = function () {
        return Math.random();
    };
    const transactionUser = db.get('transactions').push({id: ID(), userId: user.id,bookId: book.id, nameUser: user.name, nameBook: book.title}).write();
    res.redirect('/transaction');
}


// iscomplete
module.exports.iscomplete =  function (req, res) {
    const id = parseFloat(req.params.id);
    const transaction = db.get('transactions').find({id: id}).assign({isComplete: true}).write();
    console.log(transaction);
    res.redirect('/transaction');
}