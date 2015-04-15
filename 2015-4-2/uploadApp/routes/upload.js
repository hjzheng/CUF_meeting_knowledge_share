var express = require('express');
var path = require('path');
var router = express.Router();
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart({uploadDir: "./upload_tmp"});

var mdPath = 'upload';

var fs = require("fs");

var file = fs.readdirSync(mdPath);

router.post('/', multipartMiddleware, function(req, res){
  //console.log(req.files);
  var file = req.files.file;
  var fileName = file.originalFilename;
  var fileTmpPath = file.path;

  if(file.ws.closed == true) {
      try {
        var newPath = path.join(mdPath, fileName);
        fs.renameSync(fileTmpPath, newPath);
      } catch(err) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message || "server error",
            error: err
        });
      }
      res.send("upload success");
  }
});

module.exports = router;                             
