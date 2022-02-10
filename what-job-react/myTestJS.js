var http = require('follow-redirects').http;
var fs = require('fs');

var options = {
    'method': 'POST',
    'hostname': 'localhost',
    'port': 3000,
    'path': '/api/users/sign_in',
    'headers': {
    },
    'maxRedirects': 20
};

var req = http.request(options, function (res) {
    var chunks = [];

    res.on("data", function (chunk) {
        chunks.push(chunk);
    });

    res.on("end", function (chunk) {
        var body = Buffer.concat(chunks);
        console.log(body.toString());
    });

    res.on("error", function (error) {
        console.error(error);
    });
});

var postData = "------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name=\"user[email]\"\r\n\r\nalex2@test.com\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name=\"user[password]\"\r\n\r\npassword1\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW--";

req.setHeader('content-type', 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW');

req.write(postData);
req.write(postData.headers);

req.end();