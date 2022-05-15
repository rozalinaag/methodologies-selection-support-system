const {Methodology} = require('../models/models')
const ApiError = require('../error/ApiError');


class MethodologyController {
  async create(req, res) {
      const {name, description} = req.body
      const methodology = await Methodology.create({name, description})
      return res.json(methodology)
  }

  async getAll(req, res) {
      const methodology = await Methodology.findAll()
      return res.json(methodology)
  }

  async getOne(req, res) {
    const {id} = req.params
    const methodology = await Methodology.findOne(
        {
            where: {id} 
        },
    )
    return res.json(methodology)
  }
  
  async delete(req, res) {
    return res.json();
  }

}

module.exports = new MethodologyController();

