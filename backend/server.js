const app = require('./src');
const PORT = 8080;

app.listen(PORT, ()=> {
    console.log(`Server has started on PORT: ${PORT}`);
});
