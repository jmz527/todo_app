var express = require('express');
var router = express.Router();

// HELPER VARS
//--------------------------------------------------------------------------//


// MAIN ROUTES
//--------------------------------------------------------------------------//
	
	router.get('/', function(req, res) { // landing page
		res.render('index', { title: 'todo app' })
	})
	
	router.get('/root', (req, res) => { res.redirect('/') })
	router.get('/main', (req, res) => { res.redirect('/') })

	router.get('/lists', function(req, res) {
		res.render('lists', { title: 'todo app - lists' })
	})

	router.get('/todos', function(req, res) {
		res.render('items', { title: 'todo app - todos' })
	})

	router.get('/list/:id', function(req, res) {
		res.render('list', { title: 'todo app - list', id: req.params.id })
	})

	router.get('/todo/:id', function(req, res) {
		res.render('item', { title: 'todo app - todo', id: req.params.id })
	})

	router.get('/forms', function(req, res) {
		res.render('forms', { title: 'todo app - forms' })
	})

	router.get('/form', function(req, res) {
		res.render('form', { title: 'todo app - form', formType: 'list_form' })
	})

module.exports = router;
