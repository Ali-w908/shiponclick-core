
// Wait for server to be ready
const net = require('net');
const client = new net.Socket();
const start = Date.now();

const tryConnect = () => {
    client.connect(3000, 'localhost', () => {
        console.log('Server is up!');
        client.destroy();
        process.exit(0);
    });
};

client.on('error', (err) => {
    if (Date.now() - start > 60000) {
        console.error('Timeout waiting for server');
        process.exit(1);
    }
    setTimeout(tryConnect, 1000);
});

tryConnect();
