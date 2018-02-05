'use strict'

const repository = (db) => {
    const collection = db.collection('people')

    const getAllPeople = () =>{
        return new Promise((resolve, reject)=>{
            const peoples = collection.find({},function(err,people){
                if(err)
                {
                    reject(new Error('Not found the people, err: ' + err) )
                }
                resolve(peoples)
            })
        })
    }


    const getPeoplebyId = (id) =>{
        return new Promise((resolve,reject)=>{
            collection.findOne({id:id},(err,people)=>{
                if(err)
                {
                    reject(new Error(`Not found people by id, err: ${err}`))
                }
                resolve(people)
            })
        })
    }

    const createPeople = (people)=>{
        return new Promise((resolve,reject)=>{
            collection.insert(people,(err,result)=>{
                if(err)
                {
                    reject(new Error(`Error: ${err}`))
                }

                resolve(result)
            })
        })
    }

    const disconnect = () =>{
        db.close()
    }

    return Object.create({getAllPeople,getPeoplebyId,disconnect})

}

const connect = (connection)=>{
    return new Promise((resolve,reject)=>{
        if(!connection)
        {
            reject(new Error('connection db not supplied!'))
        }
        resolve(repository(connection))
    })
}

module.exports = Object.create({},{connect})