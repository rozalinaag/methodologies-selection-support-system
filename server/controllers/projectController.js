const {Project} = require('../models/models')
const ApiError = require('../error/ApiError');


class ProjectController {

  async create(req, res) {
      const {name} = req.body
      const project = await Project.create({name}) //добавление в БД с помощьб функции create
      return res.json(project)
    //   res.render('home', {
    //     title: 'Students', 
    //     isIndex: true,
    // })
  }

  async getAll(req, res) {
      const projects = await Project.findAll()
      //return res.json(projects)
      res.render('home', {
             title: 'Students', 
             isIndex: true,
      })
  }

  async getOne(req, res) {
    return res.json();
  }
}

module.exports = new ProjectController();

