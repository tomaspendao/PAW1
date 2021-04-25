var mongoose = require("mongoose");
var Promoter = require("../models/promoter");

var promoterController = {};

promoterController.showAll = function (req, res) {
  Promoter.find({}).exec((err, dbitems) => {
    if (err) {
      console.log("Erro a ler");
      res.redirect("/error");
    } else {
      console.log(dbitems);
      res.render("promoter/promoterList", { items: dbitems });
    }
  });
};

promoterController.show = function (req, res) {
  Promoter.findOne({ _id: req.params.id }).exec((err, dbitem) => {
    if (err) {
      console.log("Erro a ler");
      res.redirect("/error");
    } else {
      res.render("promoter/promoterDetails", { item: dbitem });
    }
  });
};

// criar 1 promoter
promoterController.createForm = function (req, res) {
  console.log("controller1");
  res.render("promoter/createPromoter");
};

promoterController.create = function (req, res) {
  var promoter = new Promoter(req.body);
  promoter.save((err) => {
    if (err) {
      console.log("Erro a gravar");
      res.redirect("/error");
    } else {
      res.redirect("/");
    }
  });
};

promoterController.editForm = function (req, res) {
  Promoter.findOne({ _id: req.params.id }).exec((err, dbitem) => {
    if (err) {
      console.log("Erro a ler");
      res.redirect("/error");
    } else {
      res.render("promoter/promoterEdit", { item: dbitem });
    }
  });
};

promoterController.edit = function (req, res) {
  Promoter.findByIdAndUpdate(req.body._id, req.body, (err, editedItem) => {
    if (err) {
      console.log("Erro a gravar");
      res.redirect("/error");
    } else {
      res.redirect("/promoters/show/" + req.body._id);
    }
  });
};

promoterController.delete = function (req, res) {
  Promoter.remove({ _id: req.params.id }).exec((err) => {
    if (err) {
      console.log("Erro a ler");
    } else {
      res.redirect("/promoters");
    }
  });
};

module.exports = promoterController;
