const express =  require("express");
const app = express();
const cors = require("cors");
const bodyParser = require ("body-parser");
const mongoose = require ("mongoose");
const indexRouter = require ("./routes/index.js");
const authRouter = require("./routes/login.js")
const PORT = process.env.PORT || 80;

app.use(express.json());
app.use(cors());
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

mongoose.connect("mongodb://localhost:27017/banking-system",{
    useNewUrlParser: true
})
const db = mongoose.connection
db.on('error',error=> console.error(error));
db.once('open',()=> console.log('connected to MongoDB'));


app.get('/', async (req, res) => {
    res.json({ status: true, message: "Our node.js app works" })
});
app.use('/acc',indexRouter);
app.use('/auth',authRouter);

app.listen(PORT, () => console.log(`App listening at port ${PORT}`));
