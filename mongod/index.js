const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/Sample").then(()=>{
    console.log("Connected to MongoDB Successfully")

}).catch((err)=>{
    console.log(err)
})

// First schema user
const user = mongoose.Schema({
    name : String,
    email : String,
    status : Boolean,
    index : Number
})

const User = mongoose.model("Users", user)

const insertMethod_1 = async ()=>{

    const insertData = new User({
        name : "Lushiv",
        email : "lushiv@gmail.com",
        status : true,
        index : 1
    })
    await insertData.save()
}

const insertMethod_2 = async ()=>{
    const insertData = await User.create({
        name : "Janak",
        email : "lushiv@gmail.com",
        status : true,
        index : 2

    })
    console.log(insertData)
}


const finOneMethod = async ()=>{

    const name = await User.find({name :{$eq:"Janak"}})
    console.log(name)
}




finOneMethod();
// insertMethod_2();
// insertMethod_1();