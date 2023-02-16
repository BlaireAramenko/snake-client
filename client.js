const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541,
  });

  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: BKA");

    // console.log("Sending Move: up message to server...");
    setTimeout(() => {
      conn.write("Move: up");
    }, 1000);
  });

  conn.on("data", (data) => {
    console.log("Server says:", data);
    if (data.includes("===")) {
      console.log("Game board received:", data);
    }
  });

  return conn;
};

module.exports = { connect };