var mongoose = require('mongoose');
var Event = require('../models/event');

var eventController = {};

eventController.showAll = function(req,res){
    Event.find({}).exec((err, dbitems)=>{
        if (err){
            console.log('Erro a ler');
            res.redirect('/error')
        } else {
            console.log(dbitems);
            res.render('event/eventList', {items: dbitems});
        }
    })
}

eventController.show = function(req, res){
    Event.findOne({_id:req.params.id}).exec((err, dbitem)=>{
        if (err){
            console.log('Erro a ler');
            res.redirect('/error')
        } else {
            res.render('event/eventDetails', {item: dbitem});
        }
    })
}


// criar 1 Event
eventController.createForm = function (req,res) {
    res.render('event/createEvent');
}

eventController.create = function(req,res) {
    var event = new Event(req.body);
    event.save((err)=>{
        if (err) {
            console.log('Erro a gravar');
            res.redirect('/error');
        } else {
            res.redirect('/');
        }
    })
    
}

eventController.editForm = function(req, res) {
    Event.findOne({_id:req.params.id}).exec((err, dbitem)=>{
        if (err){
            console.log('Erro a ler');
            res.redirect('/error')
        } else {
            res.render('event/eventEdit', {item: dbitem});
        }
    })
}

eventController.edit = function(req,res) {
    Event.findByIdAndUpdate(req.body._id,req.body,(err, editedItem)=>{
        if(err){
            console.log('Erro a gravar');
            res.redirect('/error');
        } else {
            res.redirect('/events/show/'+req.body._id);
        }
    })
}

eventController.delete = function(req,res){
    Event.remove({_id:req.params.id}).exec((err)=>{
        if(err){
            console.log('Erro a ler');
        } else {
            res.redirect('/events');
        }
    })
}


module.exports = eventController;