const _ = require('lodash')
const People = require('./people')

People.methods(['get','post','put','delete'])
People.updateOptions({new:true,runValidators: true})

People.after('post',sendErrorsOrNext).after('put',sendErrorsOrNext)

function sendErrorsOrNext(req,res,next)
{
    const bundle = res.locals.bundle

    if(bundle.errors)
    {
        var errors = parseErrors(bundle.errors)
    }
    else
    {
        next()
    }
}

function parseErrors(nodeRestfulErrors){
    const errors = []
    _.forIn(nodeRestfulErrors, error => errors.push(error.message))
    return errors
}

People.route('count',function(req,res,next){
    People.count(function(error,value){
        if(error)
        {
            res.status(500).json({errors:[error]})
        }
        else
        {
            res.json({value})
        }
    })
})