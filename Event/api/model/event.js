const mongoose = require('mongoose')

const eventSchema = new mongoose.Schema({
    name:{type:String,required:[true,'Attribute is required']},
    status:{type:Boolean,required:[true,'Attribute is required'],default:True},
    startDate:{type:Date,required:[true,'Attribute is required'],default:True},
    endDate:{type:Date,required:[true,'Attribute is required'],default:True},
    amountIvitation:{type:Number,required:[true,'Attribute is required'],default:True},
    eventType:{type: Schema.Types.ObjectId, ref:'event'}
})
const eventTypeSchema = new mongoose.Schema({
    description :{ type:String, required:[true,'Attribute is required']}
})

var event = mongoose.model('event',eventSchema)
var eventType = mongoose.model('eventType',eventTypeSchema)
module.exports = {event,eventType}