const express = require("express");
const mongoose = require("mongoose");
const app = express();
mongoose.connect("mongodb://localhost:27017/college", {
useNewUrlParser: true,
useUnifiedTopology: true
})
.then(() => {
console.log("Connection successful");
})
.catch((error) => {
console.error("Error connecting to MongoDB:", error);
});
const userschema = new mongoose.Schema({
name: String,
email: String
});
const usermodel = mongoose.model("students", userschema);
// Insert a new document into the "students" collection
const newStudent = new usermodel({
name: "John Doe",
email: "john.doe@example.com"
});
newStudent.save()
.then(() => {
console.log("New student added to the database");
})
.catch((error) => {
console.error("Error adding new student:", error);
});
app.get("/users", (req, res) => {
usermodel.find({})
.then((students) => {
res.json(students);
})
.catch((err) => {
console.log(err);
res.status(500).json({ error: "Internal server error" });
});
});
app.listen(3000, () => {
console.log("Server listening on port 3000");
});