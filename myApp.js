let express = require('express');
let app = express();

// baris kode ini pada dasarnya menginstruksikan server Express untuk melayani file statis dari direktori /public Anda setiap kali ada permintaan ke jalur /public
app.use("/public", express.static(__dirname + "/public"));

// Baris ini mendefinisikan variabel absolutePath yang berisi path absolut ke file index.html yang berada di dalam folder views. __dirname adalah variabel global dalam Node.js yang berisi direktori dari file script yang sedang dieksekusi.
absolutePath = __dirname + '/views/index.html';

// Baris ini mendefinisikan rute GET ke root URL aplikasi Anda (‘/’). Ketika seseorang mengunjungi root URL, fungsi callback yang didefinisikan akan dipanggil.
app.get('/', function(req, res) {
  res.sendFile(absolutePath);
});





























module.exports = app;
