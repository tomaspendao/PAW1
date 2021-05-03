/**
 * Controller dos Eventos, que podem mostrar os eventos
 */

var mongoose = require("mongoose");
var Event = require("../models/event");
var Location = require("../models/location");

var eventController = {};

//mostrar todos os eventos
eventController.showAll = function (req, res) {
  Event.find({})
    .populate("location")
    .exec((err, dbitems) => {
      if (err) {
        console.log("Erro a ler");
        res.redirect("/error");
      } else {
        console.log(dbitems);
        res.render("event/eventList", { items: dbitems });
      }
    });
};
//mostrar um evento eme specifico
eventController.show = function (req, res) {
  Event.findOne({ _id: req.params.id })
    .populate("location")
    .exec((err, dbitem) => {
      if (err) {
        console.log("Erro a ler");
        res.redirect("/error");
      } else {
        res.render("event/eventDetails", { item: dbitem });
      }
    });
};

// criar 1 evento (FORM GET) (não aplicavel)
eventController.createForm = function (req, res) {
  Location.find({}).exec((err, dbitems) => {
    if (err) {
      console.log("Erro a ler");
      res.redirect("/error");
    } else {
      console.log(dbitems);
      res.render("event/createEvent", { items: dbitems });
    }
  });
};
//criar um evento (POST) (não aplicavel)
eventController.create = function (req, res) {
  var event = new Event(req.body);
  event.save((err) => {
    if (err) {
      console.log("Erro a gravar");
      res.redirect("/error");
    } else {
      res.redirect("/");
    }
  });
};
//editar 1 evento (FORM GET) (não aplicavel)
eventController.editForm = function (req, res) {
  Event.findOne({ _id: req.params.id }).exec((err, dbitem) => {
    if (err) {
      console.log("Erro a ler");
      res.redirect("/error");
    } else {
      res.render("event/eventEdit", { item: dbitem });
    }
  });
};
//editar um evento (POST) (não aplicavel)
eventController.edit = function (req, res) {
  Event.findByIdAndUpdate(req.body._id, req.body, (err, editedItem) => {
    if (err) {
      console.log("Erro a gravar");
      res.redirect("/error");
    } else {
      res.redirect("/events/show/" + req.body._id);
    }
  });
};
//apagar um evento (não aplicavel)
eventController.delete = function (req, res) {
  Event.remove({ _id: req.params.id }).exec((err) => {
    if (err) {
      console.log("Erro a ler");
    } else {
      res.redirect("/events");
    }
  });
};

module.exports = eventController;
