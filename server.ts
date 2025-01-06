import * as http from 'http';
import { IncomingMessage, ServerResponse } from 'http';

const server = http.createServer((req: IncomingMessage, res: ServerResponse) => {
    res.setHeader('Content-Type', 'application/json');

    switch (req.method) {
        case 'GET':
            handleGetRequest(req, res);
            break;
        case 'POST':
            handlePostRequest(req, res);
            break;
        case 'PUT':
            handlePutRequest(req, res);
            break;
        case 'DELETE':
            handleDeleteRequest(req, res);
            break;
        default:
            res.statusCode = 405;
            res.end(JSON.stringify({ message: 'Method Not Allowed' }));
    }
});

const handleGetRequest = (req: IncomingMessage, res: ServerResponse) => {
    res.statusCode = 200;
    res.end(JSON.stringify({ message: 'GET request received' }));
};

const handlePostRequest = (req: IncomingMessage, res: ServerResponse) => {
    let body = '';
    req.on('data', chunk => {
        body += chunk.toString();
    });
    req.on('end', () => {
        res.statusCode = 200;
        res.end(JSON.stringify({ message: 'POST request received', data: body }));
    });
};

const handlePutRequest = (req: IncomingMessage, res: ServerResponse) => {
    let body = '';
    req.on('data', chunk => {
        body += chunk.toString();
    });
    req.on('end', () => {
        res.statusCode = 200;
        res.end(JSON.stringify({ message: 'PUT request received', data: body }));
    });
};

const handleDeleteRequest = (req: IncomingMessage, res: ServerResponse) => {
    res.statusCode = 200;
    res.end(JSON.stringify({ message: 'DELETE request received' }));
};

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});