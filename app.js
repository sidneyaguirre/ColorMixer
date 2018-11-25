//Levanta el servidor

const moon = require("./conection");
const app = require("./server");

require("http").Server(app);

app.listen(app.get("port"), () => {
    console.log(`It's the best app... http://localhost:${app.get("port")}`);
});

module.exports = app;