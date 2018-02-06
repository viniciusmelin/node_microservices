const mongoose = require('mongoose')

const partySchema = new mongoose.Schema({
    name:{ type:String, required:[true, 'Attribute is required']},
    active:{ type:Boolean, required:[true, 'Attribute is required'],default:True},
    event:[{type: Schema.Types.ObjectId, ref:'event'}]
})

module.exports = mongoose.model('party',partySchema)