const controller = {};

controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        console.log(conn)
        conn.query(`SELECT productos.*, categorias.nombre AS "nombreCategoria" 
                    FROM productos 
                    INNER JOIN categorias 
                    ON categorias.idCategoria = productos.idCategoria`, (err, rowsProductos) => {
            conn.query(`SELECT * FROM categorias`, (err, rowsCategorias) => {
                res.render('products.ejs', {
                    data: rowsProductos,
                    dataCategorias: rowsCategorias
                });
            });
        });
    });
};

controller.add = (req, res) => {
    const data = req.body;
    console.log(data);
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO productos SET ?', [data], (err, rows) => {
            console.log(err);
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


export default controller;