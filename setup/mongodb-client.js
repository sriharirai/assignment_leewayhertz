const mongoose=require('mongoose');
const url="mongodb://localhost:27017/channelDB";

mongoose.connect(url,{useNewUrlParser:true},function(err){
    if(err){
        console.log('Error in connection');
    }
    else{
        console.log('Connected!');
    }
});

module.exports = mongoose;
