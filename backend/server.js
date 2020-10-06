const app = require("./src/index");
const port = 8080

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

process.on("unhandledRejection", e => {
    console.log(e.message);
    process.exit(1);
  });