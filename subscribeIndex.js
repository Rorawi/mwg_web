
const express =  require('express')
const request =  require('request')
const bodyParser =  require('body-parser')
const path =  require('path')

const app = express();


//Middleware
app.use(express.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.post('/subscribe', (res,req) => {
    console.log("hey!");
})

const PORT = process.env.PORT || 3000

app.listen(PORT, console.log("Server is ready!..."))