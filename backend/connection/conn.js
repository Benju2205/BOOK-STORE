const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://benju2205:666Kahrebiklo@cluster0.c0ur3nk.mongodb.net/crudop?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected"));
