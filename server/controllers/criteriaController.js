const {Criteria_user} = require('../models/models')
const ApiError = require('../error/ApiError');

class CriteriaController {
  async create(req, res) {
    try{
      const {speed, cost, time, risk, metric, planing, change, min_persons, max_persons, projectId } = req.body
      const criteria_user = await Criteria_user.create(speed, cost, time, risk, metric, planing, change, min_persons, max_persons, projectId)
      return res.json(criteria_user)
    } catch(e){
      next(ApiError.badRequest(e.message))
    }
    
  }

  async getAll(req, res) {
    const criteria_user = await Criteria_user.findAll()
      return res.json(criteria_user)
  }

  async getOne(req, res) {
    return res.json();
  }
  
  async delete(req, res) {
    return res.json();
  }
}

module.exports = new CriteriaController();

