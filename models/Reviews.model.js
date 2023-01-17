const { Schema, model } = require('mongoose');

const reviewSchema = new Schema({
    _owner:{
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    _restaurant:{
        type: Schema.Types.ObjectId,
        ref: "Restaurant",
        required: true

    },
    opinion:{
        type: String,
        required: true,
        minLength: 2
    }
},
{
    timestamps: true
}
);

module.exports = model('Review', reviewSchema);