const mongoose = require('mongoose');
const mongoUrl = 'mongodb://localhost:27017/hotels';

mongoose.connect(mongoUrl,{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('connected', () => {
    console.log("connected to mongo db server");
    
})



db.error('error', (err) => {
    console.log("mongo db connectiion error : " , err);
    
})


db.on('disconnected'   , () => {
    console.log("mongo db disconnected");
    
})