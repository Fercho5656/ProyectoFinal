const controller = {};

controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM proveedores', (err, rows) => {
            res.render('providers.ejs', {
                data: rows
            });
        });
    });
};

controller.add = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO proveedores SET ?', [data], (err, rows) => {
            res.redirect('/providers');
        })
    });
};

controller.delete = (req, res) => {
    const { idProveedor } = req.params;
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM proveedores WHERE idProveedor = ?', [idProveedor], (err, rows) => {
            res.redirect('/providers');
        });
    });
};

controller.updateForm = (req, res) => {
    const { idProveedor } = req.params;
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM proveedores WHERE idProveedor = ?', [idProveedor], (err, rows) => {
            res.render('providers-edit.ejs', {
                data: rows
            });
        });
    });
};

controller.update = (req, res) => {
    const { idProveedor } = req.params;
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('UPDATE proveedores SET ?', [data], (err, rows) => {
            res.redirect('/providers');
        });
    });
};

export default controller;