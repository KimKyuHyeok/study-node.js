const app = require('./app');
const routes = require('./routes');
require('./config');

app.use('/', routes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
