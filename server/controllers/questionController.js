//const {Project} = require('../models/models')
const ApiError = require('../error/ApiError');
const path = require('path')
const {Criteria} = require('../models/models')

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

const discription = {
    d1: 'Waterfall Model или каскадная модель разработки ‒ одна из самых старых моделей разработки ПО, подразумевает последовательное прохождение стадий, каждая из которых должна завершиться полностью до начала следующей.', 
    d2: 'V-модель – это улучшенная версия классической каскадной модели. Разница между водопадной и V-моделью заключается в том, что в водопадной модели тестирование программного обеспечения выполняется после завершения этапа разработки, тогда как в V-модели каждый этап цикла разработки имеет непосредственно связанный этап тестирования.В этой модели тестирование начинается еще со стадии написания требований, причем для каждого последующего этапа предусмотрен свой уровень тестового покрытия. Она несет в себе идею: «validation and verification», что переводится как «валидация и верификация».',
    d3: 'Спиральная модель (spiral model) ‒ одна из наиболее важных моделей жизненного цикла разработки программного обеспечения с акцентом на анализ рисков. Сочетает в себе идеи итеративной и каскадной модели. Эта модель хорошо работает для решения критически важных бизнес-задач, когда неудача несовместима с деятельностью компании.',
    d4: 'Модель инкрементной сборки ‒ это метод разработки программного обеспечения, при котором продукт проектируется, внедряется и тестируется поэтапно, пока продукт не будет готов. Жизненный цикл разделен на более мелкие легко создаваемые модули. Каждый модуль проходит по водопадной модели разработке.',
    d5: 'Итерационная модель жизненного цикла не требует для начала подробной спецификации требований - заказчик не обязан понимать, какой продукт хочет получить в итоге, и не может прописать сразу подробное техническое задание.Для начала создается часть функционала, которая одобряется заказчиком и на основе нее прописывается следующие требования. Версия может быть не идеальна, главное, чтобы она работала. Этот процесс может повторяться несколько раз до полного создания функционального ПО. ', 
    d6: 'RAD (rapid application development) model ‒ модель для быстрой разработки приложений, разновидной инкрементной модели. Компоненты или функции разрабатываются несколькими командами параллельно, как несколько маленьких отдельных проектов. Созданные модели интегрируются в один рабочий прототип.',
    d7: 'В настоящее время, Scrum является одной из наиболее популярных методологий разработки ПО. Согласно определению, Scrum ‒ это гибкое управление проектами, предсказуемые процессы, использование итеративно-инкрементального подхода для оптимизации прогнозируемости и управления рисками. Этот подход, созданный Джеффом Сазерлендом, подразумевает, что проект будет создаваться в два раза быстрее за вдвое меньшее время, чем при обычной разработке ПО.',
    d8: 'Kanban – это не полноценная методология, но удобный инструмент. Kanban делает нагляднее работу над проектом, позволяет отслеживать выполнение задач, раздавать роли и отслеживать загрузку специалистов. В основе Канбана лежит простая идея: объем незавершенных задач нужно минимизировать. Новые задачи начинаются после того, как выполнена хотя бы одна из начатых, то есть количество задач в работе должно быть ограничено.',
}

class QuestionController{
    
    async answer1(req, res) {
        const {name} = req.body
        answers.name_project = name;
        console.log(answers.name_project);
        res.render('question2', {
            question: questions.q2
        })
    }
    async answer2(req, res) {
        const {month} = req.body  
        answers.speed = month;
        console.log(answers.speed );
        translateWordToNumber("speed");
        console.log(answers.speed);
        res.render('question3', {
            question: questions.q3, 
        })
    }
    async answer3(req, res) {
        const {name} = req.body
        answers.cost = name;
        console.log(answers.cost );
        translateWordToNumber("cost");
        console.log(answers.cost);
        res.render('question4', {
            question: questions.q4
        })
    }
    async answer4(req, res) {
        const {name} = req.body
        answers.time = Number(name);
        
        res.render('question5', {
            question: questions.q5
        })
    }
    async answer5(req, res) {
        const {name} = req.body
        answers.risk = name;
        console.log(answers.risk);
        translateWordToNumber("risk");
        console.log(answers.risk);
        res.render('question6', {
            question: questions.q6
        })
    }
    async answer6(req, res) {
        const {name} = req.body
        answers.metric = name;

        console.log(answers.metric);
        translateWordToNumber("metric");
        console.log(answers.metric);

        res.render('question7', {
            question: questions.q7
        })
    }
    async answer7(req, res) {
        const {name} = req.body
        answers.planing = name;

        console.log(answers.planing);
        translateWordToNumber("planing");
        console.log(answers.planing);

        res.render('question8', {
            question: questions.q8
        })
    }
    async answer8(req, res) {
        const {name} = req.body
        answers.change= name;

        console.log(answers.change);
        translateWordToNumber("change");
        console.log(answers.change);


        res.render('question9', {
            question: questions.q9
        })
    }
    async answer9(req, res) {
        const {name} = req.body
        count_of_workers(req.body)
        await GetCriteria(res);
        const methodology_name = getMaxVes();
        console.log(comparisonWithMethodologies);
        const discription_name = getDiscription(methodology_name);
        res.render('result', {
            //methodolody here
            name: answers.name_project,
            methodology: methodology_name,
            discription: discription_name
        })
    }
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
    
}

function getDiscription(name){
    switch(name){
        case "Waterfull model": return discription.d1; break;
        case "V-model": return discription.d2; break;
        case "Spiral model": return discription.d3; break;
        case "Incremental model": return discription.d4; break;
        case "Iterative model": return discription.d5; break;
        case "Rad model": return discription.d6; break;
        case "Scrum model": return discription.d7; break;
        case "Kanban model": return discription.d8; break;
        default: return discription.d7;
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


const answers_datalist = {
    speed: ["Через 3 дня", "Через 1 неделю", "Через 2 недели", "Через 4 недели",  "Через 6 недель", "Через 10 недель" ],
    risk: [ "очень рискованный проект", "рискованный проект", "нет серьезных рисков", "нет рисков"], 
    metric: [ "Измерения очень важны", "Измерения желательны", "Измерения не обязательны", "Измерения не нужны"], 
    planing: [ "Документация прописана очень подробно", "Прописаны основные детали", "Документация проработана плохо", "Нет документации"], 
    change: ["Вносить изменения очень важно", "Желательно иметь возможность внести изменения", "Изменения будут вноситься редко", "Изменений не будет"], 
}

function translateWordToNumber(word){
    
    if (word=="speed"){
        for (let i=0; i<answers_datalist.speed.length; i++){
            if (answers.speed == answers_datalist.speed[i]){
                switch(i){
                    case 0: answers.speed = 10; break;
                    case 1: answers.speed = 8; break;
                    case 2: answers.speed = 6; break;
                    case 3: answers.speed = 4; break;
                    case 4: answers.speed = 3; break;
                    case 5: answers.speed = 2; break;
                    default: answers.speed = 2;
                }
            }
        }
    }
    else if (word=="risk"){
        for (let i=0; i<answers_datalist.risk.length; i++){
            if (answers.risk == answers_datalist.risk[i]){
                switch(i){
                    case 0: answers.risk = 3; break;
                    case 1: answers.risk = 2; break;
                    case 2: answers.risk = 1; break;
                    case 3: answers.risk = 0; break;
                    default: answers.risk = 1;
                }
            }
        }
    }
    else if (word=="metric"){
        for (let i=0; i<answers_datalist.metric.length; i++){
            if (answers.metric == answers_datalist.metric[i]){
                switch(i){
                    case 0: answers.metric = 3; break;
                    case 1: answers.metric = 2; break;
                    case 2: answers.metric = 1; break;
                    case 3: answers.metric = 0; break;
                    default: answers.metric = 1;
                }
            }
        }
    }
    else if (word=="planing"){
        for (let i=0; i<answers_datalist.planing.length; i++){
            if (answers.planing == answers_datalist.planing[i]){
                switch(i){
                    case 0: answers.planing = 3; break;
                    case 1: answers.planing = 2; break;
                    case 2: answers.planing = 1; break;
                    case 3: answers.planing = 0; break;
                    default: answers.planing = 1;
                }
            }
        }
    }
    else if (word=="change"){
        for (let i=0; i<answers_datalist.change.length; i++){
            if (answers.change == answers_datalist.change[i]){
                switch(i){
                    case 0: answers.change = 3; break;
                    case 1: answers.change = 2; break;
                    case 2: answers.change = 1; break;
                    case 3: answers.change = 0; break;
                    default: answers.change = 1;
                }
            }
        }
    }
    else if (word=="cost"){
            if (Number(answers.cost) <1000000){
                answers.cost = 1
            }
            else if (Number(answers.cost)>=1000000 && Number(answers.cost)<10000000){
                let str = answers.cost
                answers.cost = Number(str[0])
            }
            else{
                let str = answers.cost
                answers.cost = Number(str[0] + str[1])
            }
    }
}

const comparisonWithMethodologies = {
    waterfull: {
        speed: false, cost: false, time: false, risk: false, metric: false, planing: false, change: false, min_persons: false, max_persons: false, ves:0, 
    },
    vmodel: {
        speed: false, cost: false, time: false, risk: false, metric: false, planing: false, change: false, min_persons: false, max_persons: false, ves:0, 
    },
    spiral: {
        speed: false, cost: false, time: false, risk: false, metric: false, planing: false, change: false, min_persons: false, max_persons: false, ves:0, 
    },
    incremental: {
        speed: false, cost: false, time: false, risk: false, metric: false, planing: false, change: false, min_persons: false, max_persons: false, ves:0, 
    },
    iterative: {
        speed: false, cost: false, time: false, risk: false, metric: false, planing: false, change: false, min_persons: false, max_persons: false, ves:0, 
    },
    rad: {
        speed: false, cost: false, time: false, risk: false, metric: false, planing: false, change: false, min_persons: false, max_persons: false, ves:0, 
    },
    scrum: {
        speed: false, cost: false, time: false, risk: false, metric: false, planing: false, change: false, min_persons: false, max_persons: false, ves:0, 
    },
    kanban: {
        speed: false, cost: false, time: false, risk: false, metric: false, planing: false, change: false, min_persons: false, max_persons: false, ves:0, 
    },
}

function getMaxVes(){
    const maxVes = Math.max(comparisonWithMethodologies.waterfull.ves, comparisonWithMethodologies.vmodel.ves, comparisonWithMethodologies.spiral.ves, 
                    comparisonWithMethodologies.incremental.ves, comparisonWithMethodologies.iterative.ves, comparisonWithMethodologies.rad.ves, 
                    comparisonWithMethodologies.scrum.ves, comparisonWithMethodologies.kanban.ves)
    switch(maxVes){
        case comparisonWithMethodologies.waterfull.ves: return "Waterfull model"; break;
        case comparisonWithMethodologies.vmodel.ves: return "V-model"; break;
        case comparisonWithMethodologies.spiral.ves: return "Spiral model"; break;
        case comparisonWithMethodologies.incremental.ves: return "Incremental model"; break;
        case comparisonWithMethodologies.iterative.ves: return "Iterative model"; break;
        case comparisonWithMethodologies.rad.ves: return "Rad model"; break;
        case comparisonWithMethodologies.scrum.ves: return "Scrum model"; break;
        case comparisonWithMethodologies.kanban.ves: return "Kanban model"; break;
        default: return Scrum;
    }
}

async function GetCriteria(){
    
    for (let i=1; i<9; i++){
        id = i
        const criteria = await Criteria.findOne(
            {
                where: {id} 
            },
        )

        if (criteria.dataValues.speed<=answers.speed){
            setTrueMethodologyCompare(id, "speed")
        }
        if (criteria.dataValues.cost<=answers.cost){
            setTrueMethodologyCompare(id, "cost")
        } 
        if (criteria.dataValues.time<=answers.time){
            setTrueMethodologyCompare(id, "time")
        }
        if (criteria.dataValues.risk<=answers.risk){
            setTrueMethodologyCompare(id, "risk")
        }
        if (criteria.dataValues.metric<=answers.metric){
            setTrueMethodologyCompare(id, "metric")
        }
        if (criteria.dataValues.planing<=answers.planing){
            setTrueMethodologyCompare(id, "planing")
        }
        if (criteria.dataValues.change<=answers.change){
            setTrueMethodologyCompare(id, "change")
        }
        if (criteria.dataValues.min_persons<=answers.min_persons){
            setTrueMethodologyCompare(id, "min_persons")
        }
        if (criteria.dataValues.max_persons>=answers.max_persons){
            setTrueMethodologyCompare(id, "max_persons")
        }
    }
    getCountVes();
}

function getCountVes(){
    comparisonWithMethodologies.waterfull.ves = comparisonWithMethodologies.waterfull.speed + comparisonWithMethodologies.waterfull.cost + 
                                                comparisonWithMethodologies.waterfull.time + comparisonWithMethodologies.waterfull.risk + 
                                                comparisonWithMethodologies.waterfull.metric + comparisonWithMethodologies.waterfull.planing + 
                                                comparisonWithMethodologies.waterfull.change + comparisonWithMethodologies.waterfull.min_persons + comparisonWithMethodologies.waterfull.max_persons; 
    comparisonWithMethodologies.vmodel.ves = comparisonWithMethodologies.vmodel.speed + comparisonWithMethodologies.vmodel.cost + 
                                                comparisonWithMethodologies.vmodel.time + comparisonWithMethodologies.vmodel.risk + 
                                                comparisonWithMethodologies.vmodel.metric + comparisonWithMethodologies.vmodel.planing + 
                                                comparisonWithMethodologies.vmodel.change + comparisonWithMethodologies.vmodel.min_persons + comparisonWithMethodologies.vmodel.max_persons;
    comparisonWithMethodologies.spiral.ves = comparisonWithMethodologies.spiral.speed + comparisonWithMethodologies.spiral.cost + 
                                                comparisonWithMethodologies.spiral.time + comparisonWithMethodologies.spiral.risk + 
                                                comparisonWithMethodologies.spiral.metric + comparisonWithMethodologies.spiral.planing + 
                                                comparisonWithMethodologies.spiral.change + comparisonWithMethodologies.spiral.min_persons + comparisonWithMethodologies.spiral.max_persons;  
    comparisonWithMethodologies.incremental.ves = comparisonWithMethodologies.incremental.speed + comparisonWithMethodologies.incremental.cost + 
                                                comparisonWithMethodologies.incremental.time + comparisonWithMethodologies.incremental.risk + 
                                                comparisonWithMethodologies.incremental.metric + comparisonWithMethodologies.incremental.planing + 
                                                comparisonWithMethodologies.incremental.change + comparisonWithMethodologies.incremental.min_persons + comparisonWithMethodologies.incremental.max_persons; 
    comparisonWithMethodologies.iterative.ves = comparisonWithMethodologies.iterative.speed + comparisonWithMethodologies.iterative.cost + 
                                                comparisonWithMethodologies.iterative.time + comparisonWithMethodologies.iterative.risk + 
                                                comparisonWithMethodologies.iterative.metric + comparisonWithMethodologies.iterative.planing + 
                                                comparisonWithMethodologies.iterative.change + comparisonWithMethodologies.iterative.min_persons + comparisonWithMethodologies.iterative.max_persons; 
    comparisonWithMethodologies.rad.ves = comparisonWithMethodologies.rad.speed + comparisonWithMethodologies.rad.cost + 
                                                comparisonWithMethodologies.rad.time + comparisonWithMethodologies.rad.risk + 
                                                comparisonWithMethodologies.rad.metric + comparisonWithMethodologies.rad.planing + 
                                                comparisonWithMethodologies.rad.change + comparisonWithMethodologies.rad.min_persons + comparisonWithMethodologies.rad.max_persons;
    comparisonWithMethodologies.scrum.ves = comparisonWithMethodologies.scrum.speed + comparisonWithMethodologies.scrum.cost + 
                                                comparisonWithMethodologies.scrum.time + comparisonWithMethodologies.scrum.risk + 
                                                comparisonWithMethodologies.scrum.metric + comparisonWithMethodologies.scrum.planing + 
                                                comparisonWithMethodologies.scrum.change + comparisonWithMethodologies.scrum.min_persons + comparisonWithMethodologies.scrum.max_persons;  
    comparisonWithMethodologies.kanban.ves = comparisonWithMethodologies.kanban.speed + comparisonWithMethodologies.kanban.cost + 
                                                comparisonWithMethodologies.kanban.time + comparisonWithMethodologies.kanban.risk + 
                                                comparisonWithMethodologies.kanban.metric + comparisonWithMethodologies.kanban.planing + 
                                                comparisonWithMethodologies.kanban.change + comparisonWithMethodologies.kanban.min_persons + comparisonWithMethodologies.kanban.max_persons; 
}
function setTrueMethodologyCompare(id, word){
   
    switch(id){
        case 1: {
            switch(word){
                case 'speed':
                    comparisonWithMethodologies.waterfull.speed = true;
                    break;
                case 'cost':
                    comparisonWithMethodologies.waterfull.cost = true;
                    break;
                case 'time':
                    comparisonWithMethodologies.waterfull.time = true;
                    break;
                case 'risk':
                    comparisonWithMethodologies.waterfull.risk = true;
                    break;
                case 'metric':
                    comparisonWithMethodologies.waterfull.metric = true;
                    break;
                case 'planing':
                   comparisonWithMethodologies.waterfull.planing = true;
                   break;
                case 'change':
                    comparisonWithMethodologies.waterfull.change = true;
                    break;
                case 'min_persons':
                    comparisonWithMethodologies.waterfull.min_persons = true;
                    break;
                case 'max_persons':
                    comparisonWithMethodologies.waterfull.max_persons = true;
                    break;
            }; 
            break;
        }
        case 2: {
            switch(word){
                case 'speed':
                    comparisonWithMethodologies.vmodel.speed = true;
                    break;
                case 'cost':
                    comparisonWithMethodologies.vmodel.cost = true;
                    break;
                case 'time':
                    comparisonWithMethodologies.vmodel.time = true;
                    break;
                case 'risk':
                    comparisonWithMethodologies.vmodel.risk = true;
                    break;
                case 'metric':
                    comparisonWithMethodologies.vmodel.metric = true;
                    break;
                case 'planing':
                   comparisonWithMethodologies.vmodel.planing = true;
                   break;
                case 'change':
                    comparisonWithMethodologies.vmodel.change = true;
                    break;
                case 'min_persons':
                    comparisonWithMethodologies.vmodel.min_persons = true;
                    break;
                case 'max_persons':
                    comparisonWithMethodologies.vmodel.max_persons = true;
                    break;
            }; 
            break;
        }
        case 3: {
            switch(word){
                case 'speed':
                    comparisonWithMethodologies.spiral.speed = true;
                    break;
                case 'cost':
                    comparisonWithMethodologies.spiral.cost = true;
                    break;
                case 'time':
                    comparisonWithMethodologies.spiral.time = true;
                    break;
                case 'risk':
                    comparisonWithMethodologies.spiral.risk = true;
                    break;
                case 'metric':
                    comparisonWithMethodologies.spiral.metric = true;
                    break;
                case 'planing':
                   comparisonWithMethodologies.spiral.planing = true;
                   break;
                case 'change':
                    comparisonWithMethodologies.spiral.change = true;
                    break;
                case 'min_persons':
                    comparisonWithMethodologies.spiral.min_persons = true;
                    break;
                case 'max_persons':
                    comparisonWithMethodologies.spiral.max_persons = true;
                    break;
            }; 
            break;
        }
        case 4: {
            switch(word){
                case 'speed':
                    comparisonWithMethodologies.incremental.speed = true;
                    break;
                case 'cost':
                    comparisonWithMethodologies.incremental.cost = true;
                    break;
                case 'time':
                    comparisonWithMethodologies.incremental.time = true;
                    break;
                case 'risk':
                    comparisonWithMethodologies.incremental.risk = true;
                    break;
                case 'metric':
                    comparisonWithMethodologies.incremental.metric = true;
                    break;
                case 'planing':
                   comparisonWithMethodologies.incremental.planing = true;
                   break;
                case 'change':
                    comparisonWithMethodologies.incremental.change = true;
                    break;
                case 'min_persons':
                    comparisonWithMethodologies.incremental.min_persons = true;
                    break;
                case 'max_persons':
                    comparisonWithMethodologies.incremental.max_persons = true;
                    break;
            }; 
            break;
        }
        case 5: {
            switch(word){
                case 'speed':
                    comparisonWithMethodologies.iterative.speed = true;
                    break;
                case 'cost':
                    comparisonWithMethodologies.iterative.cost = true;
                    break;
                case 'time':
                    comparisonWithMethodologies.iterative.time = true;
                    break;
                case 'risk':
                    comparisonWithMethodologies.iterative.risk = true;
                    break;
                case 'metric':
                    comparisonWithMethodologies.iterative.metric = true;
                    break;
                case 'planing':
                   comparisonWithMethodologies.iterative.planing = true;
                   break;
                case 'change':
                    comparisonWithMethodologies.iterative.change = true;
                    break;
                case 'min_persons':
                    comparisonWithMethodologies.iterative.min_persons = true;
                    break;
                case 'max_persons':
                    comparisonWithMethodologies.iterative.max_persons = true;
                    break;
            }; 
            break;
        }
        case 6: {
            switch(word){
                case 'speed':
                    comparisonWithMethodologies.rad.speed = true;
                    break;
                case 'cost':
                    comparisonWithMethodologies.rad.cost = true;
                    break;
                case 'time':
                    comparisonWithMethodologies.rad.time = true;
                    break;
                case 'risk':
                    comparisonWithMethodologies.rad.risk = true;
                    break;
                case 'metric':
                    comparisonWithMethodologies.rad.metric = true;
                    break;
                case 'planing':
                   comparisonWithMethodologies.rad.planing = true;
                   break;
                case 'change':
                    comparisonWithMethodologies.rad.change = true;
                    break;
                case 'min_persons':
                    comparisonWithMethodologies.rad.min_persons = true;
                    break;
                case 'max_persons':
                    comparisonWithMethodologies.rad.max_persons = true;
                    break;
            }; 
            break;
        }
        case 7: {
            switch(word){
                case 'speed':
                    comparisonWithMethodologies.scrum.speed = true;
                    break;
                case 'cost':
                    comparisonWithMethodologies.scrum.cost = true;
                    break;
                case 'time':
                    comparisonWithMethodologies.scrum.time = true;
                    break;
                case 'risk':
                    comparisonWithMethodologies.scrum.risk = true;
                    break;
                case 'metric':
                    comparisonWithMethodologies.scrum.metric = true;
                    break;
                case 'planing':
                   comparisonWithMethodologies.scrum.planing = true;
                   break;
                case 'change':
                    comparisonWithMethodologies.scrum.change = true;
                    break;
                case 'min_persons':
                    comparisonWithMethodologies.scrum.min_persons = true;
                    break;
                case 'max_persons':
                    comparisonWithMethodologies.scrum.max_persons = true;
                    break;
            }; 
            break;
        }
        case 8: {
            switch(word){
                case 'speed':
                    comparisonWithMethodologies.kanban.speed = true;
                    break;
                case 'cost':
                    comparisonWithMethodologies.kanban.cost = true;
                    break;
                case 'time':
                    comparisonWithMethodologies.kanban.time = true;
                    break;
                case 'risk':
                    comparisonWithMethodologies.kanban.risk = true;
                    break;
                case 'metric':
                    comparisonWithMethodologies.kanban.metric = true;
                    break;
                case 'planing':
                   comparisonWithMethodologies.kanban.planing = true;
                   break;
                case 'change':
                    comparisonWithMethodologies.kanban.change = true;
                    break;
                case 'min_persons':
                    comparisonWithMethodologies.kanban.min_persons = true;
                    break;
                case 'max_persons':
                    comparisonWithMethodologies.kanban.max_persons = true;
                    break;
            }; 
            break;
        }
    }
}

module.exports = new QuestionController();