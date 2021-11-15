
const express= require('express');
//mongoose
const mongoose = require('mongoose');
//Link of port where we can access mongodb
mongoose.connect('mongodb://localhost:27017/fruitsDB');
//Adding data
//Create schema
const fruitSchema = new mongoose.Schema({
    name: String,
    rating: Number,
    review: String
});
//New schema of people
const peopleSchema= new mongoose.Schema({
    name: String,
    age: Number,
});
//Create model
//Provide singular name of collection
//It follow fruitScgema as schema
const Fruit= mongoose.model('Fruit',fruitSchema);
//Create the document that stick too the schema
const fruit = new Fruit({
    name: 'Apple',
    rating:7,
    review:'Good'
});
const banana= new Fruit({
    name: 'Banana',
    rating: 10,
    review: 'Excellent'
});
const mealon= new Fruit({
    name : 'Watermealon',
    rating: 7,
    review: 'Amazing'
});
//Saves the model fruitDB with Fruit collection
// Fruit.insertMany([banana,mealon],function(err){
//     console.log('Success');
// });
//fruit.save();
// const People= mongoose.model('People',peopleSchema);
// const people= new People({
//     name: 'Sachin',
//     age: 25
// });
//people.save();
//Updating database
Fruit.updateOne({name:"Apple"},{review:"Peach"},function(err){
    console.log(err)
})

// Finding Items In DB
Fruit.find(function(err,fruits){
    if(err){
        console.log(err);
    }
    else{
        mongoose.connection.close();
        fruits.forEach(function(fruit){
            console.log(fruit.name)
        })
    }
});


const app=express();

// app.get('/',function(req,res){
//     res.sendFile(__dirname+'/index.html');
// });

// const port=3000;
// app.listen(port,function(){
//     console.log('server '+port);
// });
//mongoose.connection.close();


//Delete
Fruit.deleteOne({name:'Apple'},function(err) {
    if (err){
        console.log(err);
    }
    else{
        console.log('Delete success');
    }
});

