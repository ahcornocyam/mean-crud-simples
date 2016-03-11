exports.index = function (req, res) {
    res.render('index', { title: 'School of Net'});
};

exports.partials =  function (req, res) {
    var name  = req.params.name;
    res.render('partials/' + name);
};

exports.angular = function (req, res) {
    var diretorio = req.params.diretorio;
    var nome  = req.params.nome;
    res.render('angular/' +diretorio + "/" + nome);
    
}