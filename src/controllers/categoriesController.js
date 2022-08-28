const controller = {};

controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM categorias', (err, rows) => {
            res.render('categories.ejs', {
                data: rows
            });
        });
    });
};

controller.add = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO categorias SET ?', [data], (err, rows) => {
            res.redirect('/categories');
        });
    });
};

controller.delete = (req, res) => {
    const { idCategoria } = req.params;
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM categorias WHERE idCategoria = ?', [idCategoria], (err, rows) => {
            res.redirect('/categories');
        });
    });
};

controller.updateForm = (req, res) => {
    const { idCategoria } = req.params;
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM categorias WHERE idCategoria = ?', [idCategoria], (err, rows) => {
            res.render('categories-edit.ejs', {
                data: rows
            })
        });
    });
};

controller.update = (req, res) => {
    const { idCategoria } = req.params;
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('UPDATE categorias SET ? WHERE idCategoria = ?', [data, idCategoria], (err, rows) => {
            res.redirect('/categories');
        });
    });
};

export default controller;