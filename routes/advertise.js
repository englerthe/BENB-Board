const express = require('express');
const advertiseRoutes = express.Router();


let Advertise = require('../models/Advertise');

//now we define the rest endpoints for the CRUD methods and implement the CRUD methods
//R: read all advertises

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
    advertise.save()
        .then(advertise => {
            res.status(200).json({ 'advertise': 'advertise added successfully' });
        })
        .catch(err => {
            res.status(400).send('adding new advertise failed');
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
            advertise.advertise_name = req.body.advertise_name;
            advertise.advertise_value = req.body.advertise_value;

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