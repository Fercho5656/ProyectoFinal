const controller = {};

controller.index = (req, res) => {
    res.render('index.ejs');
};

module.exports = controller;