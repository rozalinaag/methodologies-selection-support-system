//const {Project} = require('../models/models')
const ApiError = require('../error/ApiError');
const path = require('path')

const answers = {
    name_project: "",
    speed: 1, 
    cost:1, 
    time:1, 
    risk:1, 
    metric:1, 
    planing:1, 
    change:1, 
    min_persons:1, 
    max_persons:1, 
    projectId:1
}

const questions = {
    q1: 'Введите название вашего проекта:', 
    q2: 'Насколько быстро нужно показать заказчику первый результат?', 
    q3: 'Введите стоимость проекта:',
    q4: 'Предполагаемое время выполнения проекта:',
    q5: 'Оцените риск при создании проекта:',
    q6: 'Нужно ли делать промежуточные измерения процесса:',
    q7: 'Оцените вашу документацию к проекту:',
    q8: 'Насколько необходимо вносить изменения в процессе создания?',
    q9: 'Введите уровень команды:',
}

const answers_datalist = {
    ans1: {
        datalist: {
            a1: "Через 3 дня", 
            a2: "Через 1 неделю", 
            a3: "Через 2 недели", 
            a4: "Через 4 недели", 
            a5: "Через 6 недель", 
            a6: "Через 10 недель"
        }
    },
    ans2: "cat"
}

class QuestionController{
    async show1(req, res) {
      
        res.render('question', {
            question: questions.q1, 
            isIndex: true,
            name: 'kit1',
        })
    }
    async show2(req, res) {

        res.render('question2', {
            question: questions.q2, 
        })
    }
    async show3(req, res) {
   
        res.render('question3', {
            question: questions.q3, 
        })
    }
    async show4(req, res) {
        
        res.render('question4', {
            question: questions.q4, 
        })
    }
    async show5(req, res) {
        
        res.render('question5', {
            question: questions.q5, 
        })
    }
    async show6(req, res) {
        
        res.render('question6', {
            question: questions.q6, 
        })
    }
    async show7(req, res) {
        
        res.render('question7', {
            question: questions.q7, 
        })
    }
    async show8(req, res) {
        
        res.render('question8', {
            question: questions.q8, 
        })
    }
    async show9(req, res) {
        
        res.render('question9', {
            question: questions.q9, 
        })
    }

    async answer1(req, res) {
        const {name} = req.body
        answers.name_project = name;
        console.log(answers.name_project )
        res.render('question2', {
            question: questions.q2
        })
    }
    async answer2(req, res) {
        const {month} = req.body  
        answers.time = month;
        res.render('question3', {
            question: questions.q3, 
        })
    }
    async answer3(req, res) {
        const {name} = req.body
        console.log(name);
        answers.cost = name;
        res.render('question4', {
            question: questions.q4
        })
    }
    async answer4(req, res) {
        const {name} = req.body
        answers.time = name;
        res.render('question5', {
            question: questions.q5
        })
    }
    async answer5(req, res) {
        const {name} = req.body
        console.log(name);
        answers.risk = name;
        res.render('question6', {
            question: questions.q6
        })
    }
    async answer6(req, res) {
        const {name} = req.body
        console.log(name);
        answers.metric = name;
        res.render('question7', {
            question: questions.q7
        })
    }
    async answer7(req, res) {
        const {name} = req.body
        console.log(name);
        answers.planing = name;
        res.render('question8', {
            question: questions.q8
        })
    }
    async answer8(req, res) {
        const {name} = req.body
        console.log(name);
        answers.change= name;
        res.render('question9', {
            question: questions.q9
        })
    }
    async answer9(req, res) {
        const {name} = req.body
        count_of_workers(req.body)
        console.log(answers)
        res.render('result', {
            //methodolody here
            name: answers.name_project,
            methodology: "V-модель"
        })
    }
}

function count_of_workers(count){
    const dev = Number(count.dev_j) + Number(count.dev_m) + Number(count.dev_s)
    const test = Number(count.test_j) + Number(count.test_m) + Number(count.test_s)
    const anal = Number(count.anal_j) + Number(count.anal_m) + Number(count.anal_s)
    const max_workers = dev + test + anal;
    answers.min_persons = Number(count.dev_j) + Number(count.test_j) + Number(count.anal_j)
    answers.max_persons = max_workers;
}


module.exports = new QuestionController();