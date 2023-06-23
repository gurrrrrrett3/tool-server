import dgram from "dgram";

const server = dgram.createSocket("udp4");

server.on("error", (err) => {
  console.log(`server error:\n${err.stack}`);
  server.close();
});

server.on("message", (msg, rinfo) => {
  const data = JSON.parse(msg.toString());
  console.log(`server got: message from ${rinfo.address}:${rinfo.port}`);
  console.log(data);
});

server.on("listening", () => {
  const address = server.address();
  console.log(`server listening ${address.address}:${address.port}`);
});

server.bind(6700);