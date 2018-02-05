//const restful = require('node-restful')
const mongoose = resultful.mongoose


const peoplePhysicalSchema = new mongoose.Schema({
    name : {type: String,required:[true,'Attribute is required']},
    cpf: {type: number,required:[true,'Attribute is required']},
    address: addressSchema
})

const peopleLegalSchema = new mongoose.Schema({
    cnpj:{type: Number,required:[true,'Attribute is required']},
    ie:{type: String},
    name:{type: String},
    address: addressSchema
})

const addressSchema = new mongoose.Schema({
    number : {type: String, required:[true,'Attribute is required']},
    street : {type: String, required:[true,'Attribute is required']},
    complement: {type: String},
    neighborhood: {type:String,required:[true,'Attribute is required']}
})

const peopleSchema = new mongoose.Schema({
    people_physical : peoplePhysicalSchema,
    people_legal: peopleLegalSchema,
    active: {type: Boolean, required:true, default:true},
    identification: {type: String, required:true}
})

module.exports = mongoose.model('people',peopleSchema)
