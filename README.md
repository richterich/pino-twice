# When using the transport `pino/file`, a JavaScript file included with the `--import` option is executed twice.

To reproduce this issue please create fastify instance with following options:
```javascript
const app = fastify({
  logger: {
    level: 'debug',
    transport: {
      target: 'pino/file',
      options: { destination: './tmp/app.log', mkdir: true },
    },
  },
});
```
Run application with command:
```bash
node --import=./twice.js index.js
```
Actual output:
```bash
twice
once
twice
```
Expected output:
```bash
twice
once
```
