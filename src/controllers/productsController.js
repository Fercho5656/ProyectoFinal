const controller = {};

controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM productos', (err, rows) => {
            res.render('products.ejs', {
                data: rows
            });
        });
    });
};

controller.add = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO productos SET ?', [data], (err, rows) => {
            res.redirect('/products');
        });
    });
};

controller.delete = (req, res) => {
    const { idProducto } = req.params;
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM productos WHERE idProducto = ?', [idProducto], (err, rows) => {
            res.redirect('/products');
        });
    });
};

controller.updateForm = (req, res) => {
    const { idProducto } = req.params;
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM productos WHERE idProducto = ?', [idProducto], (err, rows) => {
            res.render('products-edit.ejs', {
                data: rows
            });
        });
    });
};

controller.update = (req, res) => {
    const { idProducto } = req.params;
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('UPDATE productos SET ? WHERE idProducto = ?', [data, idProducto], (err, rows) => {
            res.redirect('/products');
        });
    });

};


module.exports = controller;