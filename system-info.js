const os = require('os');
console.log('System Information:');
console.log(`Platform: ${os.platform()}`);
console.log(`CPU Architecture: ${os.arch()}`);
console.log(`Total Memory: ${(os.totalmem() / 1e9).toFixed(2)} GB`);
console.log(`Free Memory: ${(os.freemem() / 1e9).toFixed(2)} GB`);
console.log(`CPU Cores: ${os.cpus().length}`);
