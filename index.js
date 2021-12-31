//2nd create app.js or index.js
//7th
require("dotenv").config();
//1st line
const express = require("express");
//2nd
const exp = express();
//3rd
exp.use(express.json());
//4th
const port = 8000;
//6th
const mongoose = require("mongoose");
//7th
const cakeModel = require("./model/cakeSchema");

//8th
mongoose.connect(process.env.mongourl).then(() => console.log("mongo db connected......."));
//9th
exp.get("/", (req, res) => res.send("Welcome To V.R Cakes Shop !"));
//10th
exp.get("/display", async(req, res) => {
    const list = await cakeModel.find();
    console.log(list);
    if (list.length === 0) {
        return res.json({ data: "no data is present" });

    } else {
        return res.json({ data: list });
    }
});
//11th  run npx nodemon index.js

//12th add /insert
exp.post("/addCake", (req, res) => {
    const { newCake } = req.body;
    console.log(newCake);
    const createCake = cakeModel.create(newCake);
    //console.log(createCake);
    return res.json({ data: "new cake added successfully !!" });
});
// go to post man and check http://localhost:8000/addCake
// body -> raw->json
//13th update
exp.put("/updateCake/:id", async(req, res) => {
    const id = req.params.id
    const cakeName = req.body.c_name;
    const prc = req.body.price;
    const wgt = req.body.weight;

    const updtCake = await cakeModel.findOneAndUpdate({ id: id }, {

        c_name: cakeName,
        price: prc,
        weight: wgt
    }, { new: true });
    return res.json({ data: "new cake update successfully !!" });
});
// go to post man and check
//14th delete cake
exp.delete("/deleteCake/:cakeName", async(req, res) => {
    const cakeName = req.params.cakeName;
    const delCake = await cakeModel.findOneAndDelete({ c_name: cakeName });
    console.log(delCake);
    return res.json({ data: "cake deleted successfully" });
});
//5th
exp.listen(process.env.PORT || 8000, () => console.log("server running ${port}!"));