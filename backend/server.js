const app = require("./src/index");
const port = process.env.PORT || 8080

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})

process.on("unhandledRejection", e => {
    console.log(e.message);
    process.exit(1);
  });