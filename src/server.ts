import { server } from "./app.ts";

server.listen({ port: 3535 }).then(() => {
  console.log("HTTP server running");
});
