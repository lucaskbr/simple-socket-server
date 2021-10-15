const { Server } = require("socket.io");

const io = new Server({});

io.on("connection", (socket) => {
  console.log('Socket conectado', socket);

  socket.on('shootingActivity:shot:triggered', async (shotData) => {
    console.log('shootingActivity:shot:triggered');
    console.log('data', shotData);
  });
});

io.listen(3000);