const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
	res.setHeader("Content-Type", "text/html");
	let myurl = "./views";

	if (req.url === "/") {
		myurl += "/index.html";
		res.statusCode = 200;
	} else if (req.url === "/about") {
		myurl += "/about-us.html";
		res.statusCode = 200;
	} else if (req.url === "/contacts") {
		myurl += "/contact-us.html";
		res.statusCode = 200;
	} else if (req.url === "/products") {
		myurl += "/products.html";
		res.statusCode = 200;
	} else {
		myurl += "/error.html";
		res.statusCode = 404;
	}

	fs.readFile(myurl, (err, data) => {
		if (err) {
			console.log(err);
		} else {
			res.write(data);
			res.end();
		}
	});
});

server.listen(3000, "localhost", () => {
	console.log("listen");
});
