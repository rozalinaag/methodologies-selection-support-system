const {Department} = require('../models/models')
const ApiError = require('../error/ApiError');

class DepartmentController {

  async create(req, res) {
    const {position, junior, middle, senior, projectId } = req.body
      const department = await Department.create({position, junior, middle, senior, projectId})
      return res.json(department)
  }

  async getAll(req, res) {
    const department = await Department.findAll()
      return res.json(department)
  }

  async getOne(req, res) {
    return res.json();
  }
  
  async delete(req, res) {
    return res.json();
  }
}

module.exports = new DepartmentController();

