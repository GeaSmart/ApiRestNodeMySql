const express = require('express');
const router = express.Router();
const mysqlConnection = require('../database');

router.get('/', (req, res) => {
    mysqlConnection.query('select * from projects', (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        }
        else {
            console.log(err);
        }
    });
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    console.log(id);
    mysqlConnection.query(`select * from projects where id = ?`, [id], (err, rows, fields) => {
        if (!err) {
            res.json(rows[0]);
        }
        else {
            console.log(err);
        }
    });
});

router.post('/', (req, res) => {
    const { id, name, budget } = req.body;
    const query = 'CALL projectAddOrEdit(?,?,?)';
    mysqlConnection.query(query, [id, name, budget], (err, rows, fields) => {
        if (!err) {
            res.json({ Status: "Project saved!" });
        }
        else {
            console.log(err);
        }
    });
});

router.put('/:id', (req, res) => {
    const { name, budget } = req.body;
    const { id } = req.params;
    const query = 'CALL projectAddOrEdit(?,?,?)';

    mysqlConnection.query(query, [id, name, budget], (err, rows, fields) => {
        if (!err) {
            res.json({ Status: "Project updated!" });
        }
        else {
            console.log(err);
        }
    });
});

router.delete('/:id',(req,res)=>{
    const { id } = req.params;
    const query = 'CALL projectAddOrEdit(?,?,?)';

    mysqlConnection.query('delete from projects where id = ?', [id], (err, rows, fields) => {
        if (!err) {
            res.json({ Status: "Project deleted" });
        }
        else {
            console.log(err);
        }
    });
});

module.exports = router;