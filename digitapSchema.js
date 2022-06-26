const mongoose = require('mongoose');
const digitapSchema = new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    syncId: String,
    status: String,
    userId: Number
})

digitapSchema.query.byUserId = function(userId){
    return this.find({userId:userId})
}

module.exports = mongoose.model('Digitap', digitapSchema);