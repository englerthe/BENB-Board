const express = require('express');
const advertiseRoutes = express.Router();


let Advertise = require('../models/Advertise');
let Comment = require('../models/Comment');

//now we define the rest endpoints for the CRUD methods and implement the CRUD methods
//R: read all advertises

/*advertiseRoutes.route('/read').get(function (req, res) {
    console.log("got a request");
    Advertise.find().populate ('owner') 
    .then(responseFromDB => {
        let myAdvertises = [];
        responseFromDB.forEach(everyAdvertises => {
            if(req.session.currentUser){
              if(everyAdvertises.owner._id.equals(req.session.currentUser._id)){
                myAdvertises.push(everyAdvertises);
              }
            }
          })
          res.render("", {advertises: myAdvertises});
        })
        .catch(error => console.log(error));
      });
   */   

//Homepage
advertiseRoutes.route('/read').get(function (req, res) {
    console.log("got a request");
    Advertise.find(function (err, advertises) {
        if (err) {
            console.log(err);
        } else {
            res.json(advertises);
        }
    });
});


//C: create a new advertise

advertiseRoutes.route('/add').post(function (req, res) {
    console.log("Request to save this advertise:" + JSON.stringify(req.body));
    let advertise = new Advertise(req.body);
    console.log(advertise)
    advertise.save()
        .then(advertise => {
            res.status(200).json({ 'advertise': 'advertise added successfully' });
        })
        .catch(err => {
            res.status(400).send('adding new advertise failed');
        });
});

// C: Create a new comment

advertiseRoutes.route('/comment/add').post(function (req, res) {
    console.log("Request to save this Comment:" + JSON.stringify(req.body));
    let comment = new Comment(req.body);
    console.log(req.body);
    console.log("vdsgfdsgfsd",comment)
    comment.save()
        .then(comment => {
            res.status(200).json({ 'comment': 'comment added successfully' });
        })
        .catch(err => {
            res.status(400).send('adding new comment failed');
        });
});

//R: read one advertise defined be the id of the advertise

advertiseRoutes.route('/:id').get(function (req, res) {
    let id = req.params.id;
    Advertise.findById(id, function (err, advertise) {
        res.json(advertise);
    });
});

//U: update the advertise with the given id
// post -> put
advertiseRoutes.route('/update/:id').put(function (req, res) {
    Advertise.findById(req.params.id, function (err, advertise) {
        if (!advertise) res.status(404).send("advertise to update not found, advertise _id:" + req.params.id);
        else {
            advertise.advertise_id = req.body.advertise_id;
            advertise.advertise_title = req.body.advertise_title;
            advertise.advertise_type = req.body.advertise_type;
            advertise.advertise_description = req.body.advertise_description;
            advertise.advertise_category = req.body.advertise_category;
            advertise.advertise_price = req.body.advertise_price;
            advertise.advertise_pictureUrl = req.body.advertise_pictureUrl;
            advertise.advertise_counter = req.body.advertise_counter;
            advertise.advertise_status = req.body.advertise_status;
            advertise.advertise_city = req.body.advertise_city;

            advertise.save().then(advertise => {
                res.json('advertise updated!');
            })
                .catch(err => {
                    res.status(400).send("Update not possible");
                });
        }
    });
});

//D: delete the advertise with the given id
// get -> post
advertiseRoutes.route('/delete/:id').post(function (req, res) {
    Advertise.findByIdAndDelete(req.params.id, function (err, advertise) {
        if (!advertise)
            res.status(404).send("data is not found");
        else
            res.json('advertise deleted!');
    });
});

module.exports = advertiseRoutes;