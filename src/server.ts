import { server } from "./app.ts";

server.listen({ port: 3535, host: "0.0.0.0" }).then(() => {
  console.log("HTTP server running");
});
