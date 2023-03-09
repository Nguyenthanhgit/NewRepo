const express = require("express");
const app = express();
app.use(express.json());
// app.listen(8080);
// data
let data = [
  { id: 1, hoTen: "A", email: "a@gmail.com" },
  { id: 12, hoTen: "B", email: "b@gmail.com" },
];
// GET
app.get("/demo/:maUser", (req, res) => {
  // lay chuoi json => lay data bang body
  let { maUser } = req.params;
  let { hoTen, tuoiTac, email, maNguoiDung } = req.body;
  res.status(200).send(data);
});
// GET id
app.get("/demo/:id");
// POST
app.post("/demo", (req, res) => {
  let { hoTen, tuoiTac, email, maNguoiDung } = req.body;
});

// put
app.put("/demo/:id", (req, res) => {
  let { id } = req.params;
  let { hoTen, tuoiTac, email, maNguoiDung } = req.body;
});
// delete
app.delete("/demo/:id");

// yarn add mysql2
const mysql = require("mysql2");
// chuoi ket noi
const conn = mysql.createConnection({
  host: "localhost",
  database: "db_node28",
  user: "root",
  password: "1234",
  port: 3306,
});

app.get("/getFood", (req, res) => {
  let sql = "SELECT * FROM food ";

  conn.query(sql, (err, result) => {
    res.send(result);
  });
});
