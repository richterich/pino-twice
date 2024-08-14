import fastify from "fastify";

const app = fastify({
  logger: {
    level: 'debug',
    transport: {
      target: 'pino/file',
      options: { destination: './tmp/app.log', mkdir: true },
    },
  },
});

app.listen({ port: 8080, host: '127.0.0.1' }, (err, address) => {
  if (err) {
    instance.log.error({ err, address }, 'Server Start Error');
    process.exit(1);
  }
});

console.log("once");
