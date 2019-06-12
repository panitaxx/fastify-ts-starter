import convict from "convict";

const configSchema = {
  env: {
    doc: "The application environment.",
    format: ["production", "development", "test"],
    default: "development",
    env: "NODE_ENV"
  },
  ip: {
    doc: "The IP address to bind.",
    format: "ipaddress",
    default: "0.0.0.0",
    env: "BIND_ADDRESS",
  },
  port: {
    doc: "The port to bind.",
    format: "port",
    default: 3030,
    env: "HTTP_PORT",
    arg: "port"
  }
};

export default convict(configSchema);