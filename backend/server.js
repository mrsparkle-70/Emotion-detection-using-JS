import express from 'express'
import cors from 'cors'
import Connection from '../database/db.js'
import bp from 'body-parser'
import User from '../database/model/schema.js';

const app = express();
app.use(cors());

const PORT = 3000;

//setting up viewport for ejs
app.set('view engine', 'ejs');

//loading static asssets
app.use(express.static("./public"))

app.use(bp.json());
app.use(bp.urlencoded({extended: false}))

// Home route
app.get('/', (req, res) => {
    res.render('../public/base');
})

// Contact route
app.get('/contact', (req, res) => {
    res.render('../public/contact');
})

// faq route
app.get('/faq', (req, res) => {
    res.render('../public/faq');
})

// similarity route
app.get('/similarity', (req, res) => {
    res.render('../public/similarity');
})

// Testimonial route
app.get('/testimonial', (req, res) => {
    res.render('../public/testimonial');
})

// UploadPic route
app.get('/uploadPic', (req, res) => {
    res.render('../public/uploadPic');
})



//Database route
app.post('/savetodb', (req, res) => {
    const name = req.body.name
    const age = req.body.age
    var gender = req.body.gender

    if (gender == "1") {
        gender = "Male"
    }
    else if (gender == "2") {
        gender = "Female"
    }
    else {
        gender == "Prefer Not to say"
    }
    const newUser = new User({
        name: name,
        age: age,
        gender: gender
    })
    try {
        newUser.save()
        res.status(201).send("Voila! Data saved Successfully !!!");
    }
    catch {
        console.log("Couldnot save data to Database")
    }
})

app.listen(PORT, () => {
    console.log("App listening at port " + PORT)
    // try{
    //     Connection();
    // }
    // catch{
    //     console.log("Couldnot Connect to Database")
    // }
})

