const express = require('express');
const cors = require('cors');
const app = express();
const port = 8000;

require('./server/config/mongoose.config');
app.use(cors());
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({extended:true}));
require('./server/routes/lyric.routes')(app);
require('./server/routes/selection.routes')(app);
require('./server/routes/vision.routes')(app);
    
app.listen(port, () => console.log(`Listening on port: ${port}`) );