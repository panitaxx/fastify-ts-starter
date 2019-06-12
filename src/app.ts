import fastify from "fastify";
import cors from "fastify-cors";

const app = fastify({
  logger: true,
});

app.register(require("fastify-sensible"))
app.register(cors, {
  origin: "*"
});



export {
  app
};