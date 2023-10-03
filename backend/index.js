const express = require('express');
const bodyParser = require("body-parser")
const path = require("path")
const server = express();
const mongoose = require('mongoose');
const cors = require("cors")
const blogRoutes = require("./routes/blog")
const imageRoutes = require("./routes/image")


//middlewares
server.use(bodyParser.json())
server.use(cors())

//routes
server.use("/blog",blogRoutes);
// server.use("/image",imageRoutes);

server.use('/a',express.static('/b'));



// server.use(express.static(__dirname + '/public'));

server.use(express.static(path.join(__dirname, "../public")))
server.use('../uploads', express.static('uploads'));
server.use(bodyParser.urlencoded({extended:true}))


mongoose.set('strictQuery', true);
// mongoose.connect("mongodb+srv://MobileWebGhana:mobilewebgh@blog.vh2bllx.mongodb.net/?retryWrites=true&w=majority",
mongoose.connect("mongodb+srv://ui:mwg_database23@cluster0.1mzqcx8.mongodb.net/?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
    
    )
    .then(res => {
        server.listen(5000, () => console.log('Server is ready'))
    }).catch(err => console.log(err))