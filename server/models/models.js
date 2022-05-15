const sequelize = require('../db')
const {DataTypes} = require('sequelize')

//таблица пользователей
const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true,},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"},
})

//личный кабинет
const Storage_result = sequelize.define('storage_result', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

//методология
const Methodology = sequelize.define('methodology', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false},
})

//критерии методологии
const Criteria = sequelize.define('criteria', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    speed: {type: DataTypes.INTEGER, defaultValue: 1},
    cost: {type: DataTypes.INTEGER, defaultValue: 1},
    time: {type: DataTypes.INTEGER, defaultValue: 1},
    risk: {type: DataTypes.INTEGER, defaultValue: 0},
    metric: {type: DataTypes.INTEGER, defaultValue: 0},
    planing: {type: DataTypes.INTEGER, defaultValue: 0},
    change: {type: DataTypes.INTEGER, defaultValue: 0},
    min_persons: {type: DataTypes.INTEGER, defaultValue: 0},
    max_persons: {type: DataTypes.INTEGER, defaultValue: 1},
})

//проект
const Project = sequelize.define('project', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false}
})

//отдел сотрудников
const Department = sequelize.define('department', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    position: {type: DataTypes.STRING, unique: true, allowNull: false},
    junior: {type: DataTypes.INTEGER, defaultValue: 0},
    middle: {type: DataTypes.INTEGER, defaultValue: 0},
    senior: {type: DataTypes.INTEGER, defaultValue: 0}
})

//критерии от пользователя
const Criteria_user = sequelize.define('criteria_user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    speed: {type: DataTypes.INTEGER, defaultValue: 1},
    cost: {type: DataTypes.INTEGER, defaultValue: 1},
    time: {type: DataTypes.INTEGER, defaultValue: 1},
    risk: {type: DataTypes.INTEGER, defaultValue: 0},
    metric: {type: DataTypes.INTEGER, defaultValue: 0},
    planing: {type: DataTypes.INTEGER, defaultValue: 0},
    change: {type: DataTypes.INTEGER, defaultValue: 0},
    min_persons: {type: DataTypes.INTEGER, defaultValue: 0},
    max_persons: {type: DataTypes.INTEGER, defaultValue: 1},
})

//связь сущностей
User.hasOne(Storage_result)
Storage_result.belongsTo(User)

Methodology.hasOne(Project)
Project.belongsTo(Methodology)

Methodology.hasOne(Criteria)
Criteria.belongsTo(Methodology)

Storage_result.hasMany(Project)
Project.belongsTo(Storage_result)

Project.hasOne(Criteria_user)
Criteria_user.belongsTo(Project)

Project.hasMany(Department)
Department.belongsTo(Project)

module.exports = {
    User,
    Storage_result, 
    Methodology, 
    Criteria,
    Project,
    Department,
    Criteria_user
}