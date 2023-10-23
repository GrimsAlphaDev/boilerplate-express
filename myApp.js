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

// chain middleware
// Ini mendefinisikan rute GET ke jalur ‘/now’. Ketika server menerima permintaan GET ke jalur ‘/now’, fungsi callback yang diberikan akan dipanggil secara berurutan.
// function (req,res, next) Ini adalah fungsi middleware pertama yang dipanggil ketika server menerima permintaan GET ke jalur ‘/now’. Fungsi ini menerima tiga argumen: req (objek permintaan), res (objek respons), dan next (fungsi callback berikutnya dalam stack middleware). Dalam fungsi ini, Anda menambahkan properti time ke objek permintaan dengan nilai waktu saat ini, dan kemudian memanggil fungsi next() untuk melanjutkan ke fungsi middleware berikutnya.
app.get('/now', function(req,res,next){

  req.time = new Date().toString();
  next();

  // function(req,res){...}: Ini adalah fungsi middleware kedua (dan terakhir) yang dipanggil. Fungsi ini mengambil objek permintaan dan respons sebagai argumen. Dalam fungsi ini, Anda mengirimkan respons JSON ke klien dengan properti ‘time’ yang nilainya diambil dari properti ‘time’ objek permintaan
}, function(req,res){
  res.json({time: req.time});

});

// /:word/echo. :word adalah parameter rute yang dapat diubah.
app.get('/:word/echo', function(req,res) {
  // Dalam fungsi callback, req.params.word digunakan untuk mengambil nilai parameter :word dari URL.
  // res.json({echo: req.params.word}); mengirim respons dalam format JSON ke client. Respons tersebut berisi objek dengan properti echo yang nilainya diambil dari parameter :word.
  res.json({echo: req.params.word});

});


app.get('/name', function(req,res) {
  // console.log(req.query.firstname);
  // Dalam fungsi callback, req.query.first dan req.query.last digunakan untuk mengambil nilai query parameter first dan last dari URL.
  res.json({
    "name" : req.query.first + " " + req.query.last
  });
});




























module.exports = app;
