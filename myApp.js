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

// Baris ini  adalah metode pada objek respons yang digunakan untuk mengirim respons JSON ke klien. Dalam hal ini, responsnya adalah objek dengan properti ‘message’ yang nilainya adalah ‘Hello json’.
app.get('/json', function(req, res){
  res.json({
    'message': 'Hello json'
  });
});


// setting and accessing .env files 
app.get('/json', function(req, res) {
  let message = "Hello json";
  (process.env.MESSAGE_STYLE == "uppercase") ? message = message.toUpperCase() : message = message; res.json({ "message": message });
});





























module.exports = app;
