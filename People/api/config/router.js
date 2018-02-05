'use strict'

const status = require('http-status')
const People = require('../People/people')
module.exports = (app,options)=>{

    const {repo} = options

    app.get('/people',(req,res,next)=>{
        repo.getAllPeople().then(people =>{
            res.status(status.OK).json(people)
        }).catch(next)
    })

    app.post('/people/create',(req,res,next)=>{

        if(req.body)
        {

            var people = new People(
                {
                    active: req.body.active,
                    identification: req.body.identification
                }
            )

            var errors = people.validateSync()

            if(errors)
            {
                res.status(status.BAD_REQUEST).json(errors)
            }
            else
            {
                repo.createPeople(people).then(result =>{
                    res.status(status.OK).json({'result':'sucess'})
                })
            }


        }
        else
        {
            res.status(status.BAD_REQUEST).json({'result':'sucess'})
        }
        
    })
}