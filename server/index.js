// const express = require("express");

// const PORT = process.env.PORT || 3001;

// const app = express();

// app.get("/api", (req, res) => {
//     res.json({ message: "Hello from server!" });
//   });

// app.listen(PORT, () => {
//   console.log(`Server listening on ${PORT}`);
// });
//.............................................................................................................

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv").config();
const PORT = 3001;

const authRoutes = require("./routes/users");

// mongoose
//   .connect(process.env.MONGO_URI, {
//     dbName: "TheNodeAuth",
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log("Database connection Success.");
//   })
//   .catch((err) => {
//     console.error("Mongo Connection Error", err);
//   });

mongoose.connect("mongodb://localhost:27017/myapp",{
    useNewUrlParser:true, 
    useUnifiedTopology:true
},(err)=>{
    if(!err){
        console.log("Connected to db")
    }
    else{
        console.log("Error")
    }

})

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/ping", (req, res) => {
  return res.send({
    error: false,
    message: "Server is healthy",
  });
});

app.use("/users", authRoutes);
// app.use('/users', require('./routes/users'));

app.listen(PORT, () => {
  console.log("Server started listening on PORT : " + PORT);
});