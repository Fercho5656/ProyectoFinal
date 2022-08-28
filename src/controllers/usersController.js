const controller = {};

controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM usuarios', (err, rows) => {
            res.render('users.ejs', {
                data: rows
            });
        });
    });
};
controller.add = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO usuarios SET ?', [data], (err, rows) => {
            res.redirect('/users');
        })
    });
};
controller.delete = (req, res) => {
    const { idUsuario } = req.params;
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM usuarios WHERE idUsuario = ?', [idUsuario], (err, rows) => {
            res.redirect('/users');
        });
    });
};
controller.updateForm = (req, res) => {
    const { idUsuario } = req.params;
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM usuarios WHERE idUsuario = ?', [idUsuario], (err, rows) => {
            res.render('users-edit.ejs', {
                data: rows
            });
        });
    });
};
controller.update = (req, res) => {
    const { idUsuario } = req.params;
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('UPDATE usuarios SET ?', [data], (err, rows) => {
            res.redirect('/users');
        });
    });
};

export default controller;