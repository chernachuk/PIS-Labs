
const http = require('http');

const port = + process.env.PORT || 123;

const handler = (req, res) => {
	console.log(`-> ${req.method} ${req.url}`);
	const myMoodleUsername = 'is-91-27';
	if (req.url.slice(1) === myMoodleUsername) {
		const body = {
			name: 'Ілья',
			surname: 'Черначук',
			course: 2,
			group: 'ІС-91'
		};
        
		res.setHeader('Content-Type', 'application/json');
		res.end(JSON.stringify(body));
	}
    else{
        res.end("Bye, bye :)>");
    }
};

const server = http.createServer(handler);
server.listen(port, () => {
	console.log(`Server is listening on ${port}`);
});