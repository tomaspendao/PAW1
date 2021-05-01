var mongoose = require("mongoose");
var Promoter = require("../models/promoter");
var Event = require("../models/event");
var Location = require("../models/location");

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
  console.log(promoter.password);

  promoter.save((err) => {
    if (err) {
      console.log("Erro a gravar");
      res.redirect("/error");
    } else {
      res.redirect("/admins/promoters");
    }
  });
};

promoterController.logForm = function (req, res) {
  res.render("promoter/log");
};

promoterController.log = function (req, res) {
  let e_mail = req.body.email;
  if (e_mail == "admin" && req.body.password == "admin") {
    res.redirect("/admins");
  } else {
    Promoter.findOne({ email: e_mail }).exec((err, dbitem) => {
      if (err || dbitem == null) {
        console.log("Erro a ler");
        res.redirect("/error");
      } else if (dbitem.email == e_mail) {
        if (dbitem.password == req.body.password) {
          console.log("Correct");
          res.redirect("/promoters/events");
        }
      }
    });
  };
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

/////EVENTS/////

promoterController.showAllEvents = function (req, res) {
  Event.find({})
    .populate("location")
    .exec((err, dbitems) => {
      if (err) {
        console.log("Erro a ler");
        res.redirect("/error");
      } else {
        console.log(dbitems);
        res.render("promoter/events/eventList", { items: dbitems });
      }
    });
};
promoterController.showEvent = function (req, res) {
  Event.findOne({ _id: req.params.id })
    .populate("location")
    .exec((err, dbitem) => {
      if (err) {
        console.log("Erro a ler");
        res.redirect("/error");
      } else {
        res.render("promoter/events/eventDetails", { item: dbitem });
      }
    });
};

promoterController.createFormEvent = function (req, res) {
  Location.find({}).exec((err, dbitems) => {
    if (err) {
      console.log("Erro a ler");
      res.redirect("/error");
    } else {
      console.log(dbitems);
      res.render("promoter/events/createEvent", { items: dbitems });
    }
  });
};

//===================================
//NEW STARTS
//===================================
promoterController.createEvent = function (req, res, next) {
  const url = req.protocol + '://' + req.get('host') + '/uploads/' + req.file.filename;
  Event.create(
    {
      name: req.body.name,
      description: req.body.description,
      location: req.body.location,
      poster: url
    },
    (err) => {
			if (err) {
				console.log(err);
				next(err);
			} else {
        res.redirect("/promoters/events");
			}
		}
  );
};
//===================================
//NEW ENDS
//===================================

promoterController.editFormEvent = function (req, res) {
  Event.findOne({ _id: req.params.id }).exec((err, dbitem) => {
    if (err) {
      console.log("Erro a ler");
      res.redirect("/error");
    } else {
      res.render("promoter/events/eventEdit", { item: dbitem });
    }
  });
};

//===================================
//NEW STARTS
//===================================
promoterController.editEvent = function (req, res, next) {
  if(typeof req.file !== 'undefined'){
    const url = req.protocol + '://' + req.get('host') + '/uploads/' + req.file.filename;
    
    Event.findByIdAndUpdate(req.body._id, {
      name: req.body.name,
      description: req.body.description,
      poster: url
    },
    (err) => {
      if (err) {
        console.log(err);
        next(err);
      } else {
        res.redirect("/promoters/events/show/" + req.body._id);
      }
    });
  } else {
    Event.findByIdAndUpdate(req.body._id, {
      name: req.body.name,
      description: req.body.description
    },
    (err) => {
      if (err) {
        console.log(err);
        next(err);
      } else {
        res.redirect("/promoters/events/show/" + req.body._id);
      }
    });
  }
};
//===================================
//NEW ENDS
//===================================

promoterController.deleteEvent = function (req, res) {
  Event.remove({ _id: req.params.id }).exec((err) => {
    if (err) {
      console.log("Erro a ler");
      res.redirect("/error");
    } else {
      res.redirect("/promoters/events");
    }
  });
};

//===================================
//NEW STARTS
//===================================
promoterController.uploadFile = (req, res, next) => {};
//===================================
//NEW ENDS
//===================================

module.exports = promoterController;