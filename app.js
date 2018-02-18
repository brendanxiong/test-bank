
const express = require('express');
const multer = require('multer');
const ejs = require('ejs');
const path = require('path');
const bodyP = require('body-parser');
const fs = require('fs');


// Set The Storage Engine
const storage = multer.diskStorage({
  destination: './public/uploads/',
  filename: function(req, file, cb){
    cb(null,file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

// Init Upload
const upload = multer({
  storage: storage,
  limits:{fileSize: 1000000},
  fileFilter: function(req, file, cb){
    checkFileType(file, cb);
  }
}).single('myPDF');

// Check File Type
function checkFileType(file, cb){
  // Allowed ext
  const filetypes = /pdf/;
  // Check ext
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  // Check mime
  const mimetype = filetypes.test(file.mimetype);

  if(mimetype && extname){
    return cb(null,true);
  } else {
    cb('Error: PDF Only!');
  }
}

// Init app
const app = express();

// EJS
app.set('view engine', 'ejs');

// Public Folder
app.use(express.static('./public'));

app.get('/', (req, res) => res.render('index'));

app.get('/file', (req, res)=>{res.render('upage')});


var $ = require('jquery');

app.use(express.static(__dirname + '/js'));
console.log(__dirname + '\\js');
//require('./js/load.js');
//require('./js/search.js');



app.post('/upload', (req, res) => {
  upload(req, res, (err) => {
    if(err){
      res.render('index', {
        msg: err
      });
    } else {
      if(req.file == undefined){
        res.render('index', {
          msg: 'Error: No File Selected!'
        });
      } else {
        res.render('upage', {
          msg: 'File Uploaded!',
          file: `uploads/${req.file.filename}`
        });
        console.log(req.body);
        console.log(req.file);

        var json = {}; 

        var obj;
        fs.readFile('myjsonfile.json', 'utf8', function (err, data){

         if (err){
          console.log(err);
        } 
        else {
          obj = JSON.parse(data); //now it an object
          if(obj.hasOwnProperty(req.body.subject))
          {
            obj[req.body.subject].push({"filename": req.file.filename, "uid": req.body.uid, "prof": req.body.prof});
          }
          



          console.log(obj);
          // obj.table.push({id: 2, square:3}); //add some data
          json = JSON.stringify(obj); //convert it back to json
          fs.writeFile('myjsonfile.json', json, 'utf8');

        }
      });
      }
    }
  });
});

app.get("/", (req, res)=> {
  fs.readFile('myjsonfile.json', 'utf8', function (err, data){

  });
});

  app.listen(3000, '0.0.0.0', function() {
    console.log('Listening to port:  ' + 3000);
  });
