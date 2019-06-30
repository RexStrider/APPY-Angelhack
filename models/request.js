const mongoose = require('mongoose');
const { Schema } = mongoose;


const requestSchema = new Schema({
    yes: {
        type: Number,
        default: 0
    },
    no: {
        type: Number, 
        default: 0
    },
    _user: { 
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});



mongoose.model('Request', requestSchema);