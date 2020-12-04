const controller = {};

controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM clientes', (err, rows) => {
            res.render('customer.ejs', {
                data: rows
            });
        })
    });
};

controller.add = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO clientes SET ?', [data], (err, rows) => {
            res.redirect('/');
        });
    })
};

controller.delete = (req, res) => {
    const { idCliente } = req.params;
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM clientes WHERE idCliente = ?', [idCliente], (err, rows) => {
            res.redirect('/');
        })
    })
};

controller.updateForm = (req, res) => {
    const { idCliente } = req.params;

    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM clientes WHERE idCliente = ?', [idCliente], (err, rows) => {
            res.render('customer-edit.ejs', {
                data: rows
            });
        });
    });
};

controller.update = (req, res) => {
    const { idCliente } = req.params;
    const data = req.body;

    req.getConnection((err, conn) => {
        conn.query('UPDATE clientes SET ? WHERE idCliente = ?', [data, idCliente], (err, rows) => {
            res.redirect('/');
        });
    });
};

module.exports = controller;