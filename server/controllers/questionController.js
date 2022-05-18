//const {Project} = require('../models/models')
const ApiError = require('../error/ApiError');
const path = require('path')

class QuestionController{
    async show1(req, res) {
        //const projects = await Project.findAll()
        //return res.json(projects)
        res.render('question', {
            question: 'Введите название вашего проекта:', 
            isIndex: true,
            name: 'kit1',
        })
    }
    async show2(req, res) {
        //const projects = await Project.findAll()
        //return res.json(projects)
        res.render('question', {
            question: 'What are you doing?', 
            isIndex: true,
            name: 'kit2',
        })
    }
    async show3(req, res) {
        //const projects = await Project.findAll()
        //return res.json(projects)
        res.render('question', {
            question: 'What are you drinking?', 
            isIndex: true,
            name: 'kit3',
        })
    }
  
}

module.exports = new QuestionController();