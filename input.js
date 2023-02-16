let connection;

const setupInput = function (conn) {
  connection = conn;
  
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", (data) => {
    handleUserInput(data);
  });

  return stdin;
};

const handleUserInput = function (data) {
  if (data === '\u0003') {
    process.exit();
  } else if (data === 'w') {
    console.log('Move: up');
  } else if (data === 'a') {
    console.log('Move: left');
  } else if (data === 's') {
    console.log('Move: down');
  } else if (data === 'd') {
    connection.write('Move: right');
  }
};



module.exports = { setupInput };