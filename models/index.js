var mongoose =  require('mongoose');
mongoose.connect("mongodb://localhost/MEAN");
var db = mongoose.connection;

db.on("error", function (err) {
    console.log("erro durante a conexão", err);
});
db.once("open", function () {
    console.log("Conexão realizada com o banco");
});
exports.mongoose = mongoose;