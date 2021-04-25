var mongoose = require("mongoose");
var Location = require("../models/location");

var locationController = {};

locationController.showAll = function (req, res) {
  Location.find({}).exec((err, dbitems) => {
    if (err) {
      console.log("Erro a ler");
      res.redirect("/error");
    } else {
      console.log(dbitems);
      res.render("location/locationList", { items: dbitems });
    }
  });
};

locationController.show = function (req, res) {
  Location.findOne({ _id: req.params.id }).exec((err, dbitem) => {
    if (err) {
      console.log("Erro a ler");
      res.redirect("/error");
    } else {
      res.render("location/locationDetails", { item: dbitem });
    }
  });
};

// criar 1 Location
locationController.createForm = function (req, res) {
  res.render("location/createLocation");
};

locationController.create = function (req, res) {
  var location = new Location(req.body);
  location.save((err) => {
    if (err) {
      console.log("Erro a gravar");
      res.redirect("/error");
    } else {
      res.redirect("/");
    }
  });
};

locationController.editForm = function (req, res) {
  Location.findOne({ _id: req.params.id }).exec((err, dbitem) => {
    if (err) {
      console.log("Erro a ler");
      res.redirect("/error");
    } else {
      res.render("location/locationEdit", { item: dbitem });
    }
  });
};

locationController.edit = function (req, res) {
  Location.findByIdAndUpdate(req.body._id, req.body, (err, editedItem) => {
    if (err) {
      console.log("Erro a gravar");
      res.redirect("/error");
    } else {
      res.redirect("/locations/show/" + req.body._id);
    }
  });
};

locationController.delete = function (req, res) {
  Location.remove({ _id: req.params.id }).exec((err) => {
    if (err) {
      console.log("Erro a ler");
    } else {
      res.redirect("/locations");
    }
  });
};

locationController.back = function (req, res) {
  res.render("index");
};

module.exports = locationController;
