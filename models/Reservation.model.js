const { Schema, model } = require('mongoose');

const reservationSchema = new Schema({
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
    date:{
        type: Date,
        required: true,
    },
    time:{
        type: String,
        required: true
    },
},
{
    timestamps: true
}
);

module.exports = model('Reservation', reservationSchema);